# Use PHP 8.2 with Apache
FROM php:8.2-apache

# Install required packages
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    curl \
    gnupg2 \
    lsb-release \
    ca-certificates \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Verify Node.js installation
RUN node --version && npm --version

# Enable Apache rewrite module
RUN a2enmod rewrite

# Install PHP extensions (PDO, Zip)
RUN docker-php-ext-install pdo_pgsql zip

# Copy Laravel app files into the container
COPY . /var/www/html

# Set write permissions to Laravel directories
RUN chown -R www-data:www-data /var/www/html /var/www/html/storage /var/www/html/bootstrap/cache

# Change working directory to Laravel app root
WORKDIR /var/www/html

# Install Composer (Laravel's PHP dependency manager)
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
# Install Laravel PHP dependencies
RUN composer install --no-dev --optimize-autoloader

# Install Node.js dependencies (Vue.js)
RUN npm install

# Build the Vue.js frontend
RUN npm run build

# Copy start.sh script and make it executable
COPY start.sh /var/www/html/start.sh
RUN chmod +x /var/www/html/start.sh

# Expose port 80 for Apache and 8080 for Vue.js
EXPOSE 80 8080

# Command to run the app and serve Vue.js using Laravel's public directory
CMD ["/var/www/html/start.sh"]