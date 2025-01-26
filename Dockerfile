# Step 1: Set up the Laravel backend (PHP setup)
FROM php:8.2-fpm AS backend

WORKDIR /var/www/html

# Install required PHP extensions and dependencies for Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip git unzip curl \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer (dependency manager for PHP)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy Laravel project files
COPY . .

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions for storage and cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Step 2: Build the Vue.js frontend
FROM node:16 AS frontend

WORKDIR /var/www/html

# Copy package files first for efficient caching
COPY package.json package-lock.json ./

# Install Vue.js dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Vue.js app for production
RUN npm run build

# Step 3: Set up the Nginx server (final image)
FROM php:8.2-fpm

WORKDIR /var/www/html

# Install required PHP extensions and dependencies for Nginx
RUN apt-get update && apt-get install -y \
    libpng-dev libjpeg-dev libfreetype6-dev zip git unzip curl nginx supervisor \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql \
    && apt-get clean \
    && rm -rf /var/lib/apt/lists/*

# Install Composer (dependency manager for PHP)
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy all Laravel and frontend files
COPY . .

# Copy built Vue.js assets from the frontend build stage
COPY --from=frontend /var/www/html/public/build /var/www/html/public/build

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions for Laravel's storage and cache
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Configure Nginx (you'll need to provide an nginx.conf file)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Configure Supervisor (optional, to manage PHP-FPM and Nginx together)
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Expose the port Nginx will run on
EXPOSE 80

# Command to start Supervisor (which will start Nginx and PHP-FPM)
CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
