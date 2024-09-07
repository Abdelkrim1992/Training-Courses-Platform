<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Setting;

class SettingSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
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
                ['key' => $setting['key']],
                ['value' => $setting['value']]
            );
        }
    }
}
