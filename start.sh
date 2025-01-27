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

# Start Laravel server in background
echo "Starting Laravel server..."
php artisan serve --host=0.0.0.0 --port=8000 &

# Install Node.js dependencies for Vue.js
echo "Installing Node.js dependencies..."
npm install

# Build the Vue.js project (optional)
echo "Building Vue.js project..."
npm run build

# Start Vue.js development server in background
echo "Starting Vue.js development server..."
npm run dev &

# Wait for all background processes to finish
wait