<?php

namespace App\Http\Controllers\backend;

use App\Models\Setting;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use Illuminate\Support\Facades\Validator;

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
    // Add new setting
    public function store(Request $request) {
    $request->validate([
        'site_name' => 'required|string',
        'email'     => 'required|string|email',
        'phone'     => 'required|string',
        'address'   => 'required|string',
        'facebook'  => 'required|string',
        'instagram' => 'required|string',
    ]);

    $setting = new Setting;
    $setting->site_name = $request->site_name;
    $setting->email = $request->email;
    $setting->phone = $request->phone;
    $setting->address = $request->address;
    $setting->facebook = $request->facebook;
    $setting->instagram = $request->instagram;
    $setting->save();

    return response()->json(['status' => 200, 'message' => 'Setting stored successfully']);
}

    // Update setting (for ID = 1)
    public function update(Request $request, $id = 1) {
    $request->validate([
        'site_name' => 'required|string',
        'email'     => 'required|string|email',
        'phone'     => 'required|string',
        'address'   => 'required|string',
        'facebook'  => 'required|string',
        'instagram' => 'required|string',
    ]);

    $setting = Setting::find($id);

    if (!$setting) {
        return response()->json(['status' => 404, 'message' => 'Setting not found'], 404);
    }

    $setting->site_name = $request->site_name;
    $setting->email = $request->email;
    $setting->phone = $request->phone;
    $setting->address = $request->address;
    $setting->facebook = $request->facebook;
    $setting->instagram = $request->instagram;
    $setting->save();

    return response()->json(['status' => 200, 'message' => 'Setting updated successfully']);
}

}
