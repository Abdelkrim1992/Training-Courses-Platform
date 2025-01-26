# Base image for PHP with necessary extensions
FROM php:8.2-fpm

# Install system dependencies, PHP extensions, and Node.js
RUN apt-get update && apt-get install -y \
    git \
    curl \
    zip \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    zlib1g-dev \
    nodejs \
    npm \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd xml \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer globally
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory
WORKDIR /var/www

# Copy application files to the container
COPY . /var/www

# Install PHP dependencies
RUN composer install --optimize-autoloader --no-dev

# Install Node.js dependencies and build the Vue.js app
RUN npm install && npm run build

# Set appropriate permissions for Laravel storage and cache
RUN chmod -R 775 storage bootstrap/cache

# Expose necessary ports for Laravel and Vue.js dev server
EXPOSE 80 5173

# Copy the start script
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Start the container by running the custom start script
CMD ["/usr/local/bin/start.sh"]
