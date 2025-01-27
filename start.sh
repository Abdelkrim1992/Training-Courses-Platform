#!/usr/bin/env bash

set -e  # Exit on error

# Run Composer install
echo "Running Composer"
composer install --no-dev --working-dir=/var/www/html

# Clear all caches first
php artisan config:clear
php artisan cache:clear
php artisan view:clear
php artisan route:clear

# Cache configuration and routes
echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

# Create the schema using psql
echo "Creating schema..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USERNAME -d $DB_DATABASE -c "CREATE SCHEMA IF NOT EXISTS public;" || echo "Schema creation failed but continuing..."

# Run database migrations
echo "Running migrations..."
php artisan migrate --force

# Verify storage directory permissions
echo "Verifying storage permissions..."
chmod -R 775 /var/www/html/storage
chmod -R 775 /var/www/html/bootstrap/cache

# Start Apache in foreground
apache2-foreground