<?php

namespace App\Http\Controllers\backend;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;
use App\Models\SettingImage;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class SiteSettingController extends Controller
{
    public function show($id = 1)  // Default to ID 1 if none is passed
    {
        // Find the setting by ID, including its related images and logo
        $setting = Setting::with('settingImage')->find($id);
    
        if (!$setting) {
            return response()->json(['status' => 404, 'message' => 'Setting not found']);
        }
    
        // Get the latest image if available
        $latestImage = $setting->settingImage()->latest('created_at')->first();
        $setting->setting_logo_url = $latestImage ? asset('storage/' . $latestImage->setting_image) : asset('storage/default-logo.png');  // Fallback to a default logo if no image
    
        return response()->json([
            'status' => 200,
            'data' => $setting,
        ]);
    }
    

    // Store a new setting
    // Store a new setting

    public function store(Request $request) {
        $request->validate([
            'site_name' => 'required|string',
            'email'     => 'required|string|email',
            'phone'     => 'required|string',
            'address'   => 'required|string',
            'facebook'  => 'required|string',
            'instagram' => 'required|string',
        ]);
    
        // Create a new setting instance
        $setting = new Setting;
        $setting->site_name = $request->site_name;
        $setting->email = $request->email;
        $setting->phone = $request->phone;
        $setting->address = $request->address;
        $setting->facebook = $request->facebook;
        $setting->instagram = $request->instagram;
    
        // Save the setting to get a valid setting_id
        $setting->save();
    
        // Now handle the images after setting is saved
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . \Illuminate\Support\Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images/settings_logo', $uniqueName, 'public');
    
                // Save each image with the valid setting_id
                \App\Models\SettingImage::create([
                    'setting_id' => $setting->id, // This ensures that the setting_id is valid
                    'setting_image' => $imagePath,
                ]);
            }
        }
    
        return response()->json(['status' => 200, 'message' => 'Setting stored successfully']);
    }
    
    public function update(Request $request, $id = 1)
    {
        // Validate request
        $request->validate([
            'site_name' => 'required|string',
            'email'     => 'required|string|email',
            'phone'     => 'required|string',
            'address'   => 'required|string',
            'facebook'  => 'required|string',
            'instagram' => 'required|string',
            'image'     => 'nullable|image|max:2048',  // Make sure image is optional and a valid image type
        ]);
    
        // Find the existing setting
        $setting = Setting::find($id);
    
        if (!$setting) {
            return response()->json(['status' => 404, 'message' => 'Setting not found'], 404);
        }
    
        // Update setting fields
        $setting->site_name = $request->site_name;
        $setting->email = $request->email;
        $setting->phone = $request->phone;
        $setting->address = $request->address;
        $setting->facebook = $request->facebook;
        $setting->instagram = $request->instagram;
    
        // Handle image upload
        if ($request->hasFile('image')) {
            $image = $request->file('image');
            $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
            $imagePath = $image->storeAs('images/settings_logo', $uniqueName, 'public');
            
            // Save the image in the SettingImage model
            SettingImage::create([
                'setting_id' => $setting->id, // Associate with the setting
                'setting_image' => $imagePath,
            ]);
        }
    
        // Save the updated settings
        $setting->save();
    
        return response()->json(['status' => 200, 'message' => 'Setting updated successfully']);
    }
    
    

}

