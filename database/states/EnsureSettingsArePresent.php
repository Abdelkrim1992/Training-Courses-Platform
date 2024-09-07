<?php

namespace Database\State;

use App\Models\Setting;

class EnsureSettingsArePresent
{
    public function __invoke(): void
    {
        $settings = [
            ['key' => 'site_name', 'value' => 'My Awesome Site'],
            ['key' => 'email', 'value' => 'contact@example.com'],
            ['key' => 'phone', 'value' => '123-456-7890'],
            ['key' => 'address', 'value' => '123 Main St, City, Country'],
            ['key' => 'facebook', 'value' => 'https://facebook.com/mysite'],
            ['key' => 'instagram', 'value' => 'https://instagram.com/mysite'],
        ];

        foreach ($settings as $setting) {
            Setting::updateOrCreate(
                ['id' => 1, 'key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}