# Step 1: Build the Vue.js frontend
FROM node:16 AS frontend

WORKDIR /var/www/html

# Copy package files first for efficient caching
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js app for production
RUN npm run build

# Step 2: Set up the Laravel backend
FROM php:8.2-fpm

WORKDIR /var/www/html

# Install required PHP extensions and dependencies
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip git unzip curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy Laravel project files
COPY . .

# Copy built Vue.js assets from the frontend stage
COPY --from=frontend /var/www/html/public/build /var/www/html/public/build

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions for storage and cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Map Render environment variables to Laravel
ENV DB_CONNECTION=mysql
ENV DB_HOST=mysql
ENV DB_PORT=3306
ENV DB_DATABASE=${MYSQL_DATABASE}
ENV DB_USERNAME=${MYSQL_USER}
ENV DB_PASSWORD=${MYSQL_PASSWORD}

# Expose port
EXPOSE 80

# Run Laravel migrations and start PHP-FPM
CMD php artisan migrate --force && php artisan config:cache && php artisan route:cache && php-fpm