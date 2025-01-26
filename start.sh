#!/usr/bin/env bash

echo "Running migrations..."
php artisan migrate --force

echo "Clearing and caching configuration..."
php artisan config:cache
php artisan route:cache
php artisan view:cache

echo "Starting PHP-FPM..."
php-fpm
