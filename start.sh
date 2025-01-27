#!/usr/bin/env bash

# Run Composer install
echo "Running Composer"
composer install --no-dev --working-dir=/var/www/html

# Cache configuration and routes
echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

# Create the schema using psql
echo "Creating schema..."
PGPASSWORD=$DB_PASSWORD psql -h $DB_HOST -U $DB_USERNAME -d $DB_DATABASE -c "CREATE SCHEMA IF NOT EXISTS public;"

# Run database migrations
echo "Running migrations..."
php artisan migrate --force

# Start supervisor
/usr/bin/supervisord -n -c /etc/supervisor/conf.d/supervisord.conf