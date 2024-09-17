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
    // Show setting (assuming one setting for the whole site)
    public function show($id = 1) {
        $setting = Setting::find($id);

        if (!$setting) {
            return response()->json(['status' => 404, 'message' => 'Setting not found'], 404);
        }

        return response()->json([
            'status' => 200,
            'data' => $setting
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
    
    public function update(Request $request, $id = 1) {


        // Find the existing setting
        $setting = Setting::find($id);

        $setting->site_name = $request->site_name;
        $setting->email = $request->email;
        $setting->phone = $request->phone;
        $setting->address = $request->address;
        $setting->facebook = $request->facebook;
        $setting->instagram = $request->instagram;

        if (!$setting) {
            return response()->json(['status' => 404, 'message' => 'Setting not found'], 404);
        }


        // Handle image uploads
        if ($request->hasFile('image')) {
            foreach ($request->file('image') as $image) {
                $uniqueName = time() . '-' . Str::random(10) . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('images/settings_logo', $uniqueName, 'public');
    
                // Save each image with the valid setting_id
                SettingImage::create([
                    'setting_id' => $setting->id, // This ensures that the setting_id is valid
                    'setting_image' => $imagePath,
                ]);
            }
        }
        $setting->update($request->except('image'));

        return response()->json(['status' => 200, 'message' => 'Setting updated successfully']);
    }

}

