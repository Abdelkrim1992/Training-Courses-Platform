# Step 1: Use a base PHP image with PHP-FPM
FROM php:8.2-fpm

# Step 2: Install system dependencies and PHP extensions for Laravel
RUN apt-get update && apt-get install -y \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    zip \
    git \
    curl \
    unzip \
    supervisor \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql

# Step 3: Install Node.js and npm for Vue.js
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash - \
    && apt-get install -y nodejs

# Verify Node.js and NPM installation
RUN node -v && npm -v

# Step 4: Install Composer for Laravel (for PHP dependency management)
RUN curl -sS https://getcomposer.org/installer | php \
    && mv composer.phar /usr/local/bin/composer

# Step 5: Set the working directory and copy the Laravel app files
WORKDIR /var/www
COPY . /var/www

# Step 6: Install Laravel PHP dependencies using Composer
RUN composer install --no-interaction --optimize-autoloader

# Step 7: Set up Vue.js (frontend) by navigating to the frontend directory
WORKDIR /var/www/frontend  # Adjust this path if your Vue.js project is in a different directory
RUN npm install

# Step 8: Expose necessary ports for Laravel (80) and Vue.js (3000)
EXPOSE 80 3000

# Step 9: Copy supervisord configuration to manage both processes (PHP-FPM and npm)
COPY ./supervisord.conf /etc/supervisord.conf

# Step 10: Start supervisord to manage both PHP-FPM and Vue.js (npm) concurrently
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
