#!/usr/bin/env bash

# Run Composer install
echo "Running Composer"
composer install --no-dev --working-dir=/var/www/html

# Cache configuration and routes
echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

# Run database migrations
echo "Running migrations..."
php artisan migrate --force

# Start PHP-FPM
echo "Starting PHP-FPM"
php-fpm
