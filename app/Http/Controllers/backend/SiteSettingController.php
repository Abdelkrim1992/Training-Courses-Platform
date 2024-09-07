<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class SiteSettingController extends Controller
{
    public function index() {
        try {
            $setting = Setting::first();
            if (!$setting) {
                return response()->json(['message' => 'Setting not found'], 404);
            }
            return response()->json(['data' => $setting], 200);
        } catch (\Exception $e) {
            Log::error('Error fetching setting: ' . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }

    // Update the first setting
    public function update(Request $request) {
        try {
            $setting = Setting::first();
            if (!$setting) {
                return response()->json(['message' => 'Setting not found'], 404);
            }

            // Validation
            $request->validate([
                'site_name' => 'required|string|max:255',
                'email' => 'required|email|max:255',
                'phone' => 'required|string|max:20',
                'address' => 'required|string|max:255',
                'facebook' => 'required|string|max:255',
                'instagram' => 'required|string|max:255',
            ]);

            // Update setting
            $setting->update($request->all());

            return response()->json(['data' => $setting, 'message' => 'Setting updated successfully'], 200);
        } catch (\Exception $e) {
            Log::error('Error updating setting: ' . $e->getMessage());
            return response()->json(['message' => 'Internal server error'], 500);
        }
    }
}