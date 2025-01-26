FROM php:8.2-cli

# Install necessary dependencies, including PostgreSQL dev libraries
RUN apt-get update && apt-get install -y \
    curl \
    git \
    zip \
    unzip \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libonig-dev \
    libxml2-dev \
    libpq-dev \    # <-- Add this line to install PostgreSQL development libraries
    && apt-get clean && rm -rf /var/lib/apt/lists/*

# Install Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

# Set the working directory to /var/www
WORKDIR /var/www

# Copy the Laravel application files to the container
COPY . /var/www

# Install PHP dependencies via Composer
RUN composer install --optimize-autoloader --no-dev

# Set permissions (if needed for storage and cache)
RUN chmod -R 775 storage bootstrap/cache

# Expose port 8000 for the Laravel development server
EXPOSE 8000

# Copy the start.sh script and make it executable
COPY start.sh /usr/local/bin/start.sh
RUN chmod +x /usr/local/bin/start.sh

# Start the application using the start.sh script
CMD ["/usr/local/bin/start.sh"]