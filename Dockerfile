# Use PHP 8.2 with Apache
FROM php:8.2-apache

# Install required packages including postgresql-client
RUN apt-get update && apt-get install -y \
    libpq-dev \
    libzip-dev \
    curl \
    gnupg2 \
    lsb-release \
    ca-certificates \
    postgresql-client \
    && mkdir -p /etc/apt/keyrings \
    && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg \
    && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_18.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list \
    && apt-get update \
    && apt-get install -y nodejs \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Enable Apache rewrite module
RUN a2enmod rewrite

# Install PHP extensions
RUN docker-php-ext-install pdo_pgsql zip

# Copy Laravel app files
COPY . /var/www/html

# Set write permissions
RUN chown -R www-data:www-data /var/www/html /var/www/html/storage /var/www/html/bootstrap/cache

WORKDIR /var/www/html

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Install dependencies and build
RUN composer install --no-dev --optimize-autoloader
RUN npm install
RUN npm run build

# Configure Apache
COPY apache.conf /etc/apache2/sites-available/000-default.conf
RUN a2enmod headers

# Expose port 80
EXPOSE 80

# Start Apache
CMD ["apache2-foreground"]