#!/bin/bash

# Ensure the log file exists
mkdir -p storage/logs
touch storage/logs/laravel.log

# Start Laravel's PHP development server in the background
php artisan serve --host=0.0.0.0 --port=80 &

# Start the Vue.js development server in the background
npm run dev &

# Keep the container running by tailing the Laravel log
tail -f storage/logs/laravel.log