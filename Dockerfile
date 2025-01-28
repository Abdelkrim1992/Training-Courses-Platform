# Use a multi-stage build for efficiency

# Stage 1: Build the application
FROM node:18 as build-stage

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install Node.js dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Build the Vue.js assets
RUN npm run build

# Stage 2: Serve the application
FROM php:8.2-fpm

# Install system dependencies
RUN apt-get update && apt-get install -y \
    nginx \
    git \
    unzip \
    libzip-dev \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \
    && docker-php-ext-install pdo_mysql zip exif pcntl bcmath gd pdo_pgsql pgsql  # Add PostgreSQL extensions

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Set working directory
WORKDIR /var/www/html

# Copy Laravel application files
COPY . .

# Copy built assets from the build stage
COPY --from=build-stage /app/public/build /var/www/html/public/build

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

RUN php artisan key:generate

RUN php artisan migrate --force

RUN php artisan storage:link

# Set permissions for Laravel storage and bootstrap/cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Copy Nginx configuration
COPY docker/nginx.conf /etc/nginx/sites-available/default

# Expose port 80
EXPOSE 80

# Start Nginx and PHP-FPM
CMD service nginx start && php-fpm