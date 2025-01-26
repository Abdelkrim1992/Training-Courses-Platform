#!/bin/bash

# Start Laravel's PHP development server in the background
php artisan serve --host=127.0.0.1 --port=80 &

# Start the Vue.js development server in the background
npm run dev &

# Keep the container running by tailing the Laravel log
tail -f storage/logs/laravel.log
