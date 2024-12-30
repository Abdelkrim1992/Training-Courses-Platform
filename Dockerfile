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
    libpng-dev libjpeg-dev libfreetype6-dev zip git unzip nginx supervisor \
    && docker-php-ext-configure gd --with-freetype --with-jpeg \
    && docker-php-ext-install gd pdo pdo_mysql \
    && apt-get install -y curl

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy all Laravel project files
COPY . /var/www/html

# Copy built Vue.js assets from the frontend stage
COPY --from=frontend /var/www/html/public/build /var/www/html/public/build

# Install Laravel dependencies
RUN composer install --no-dev --optimize-autoloader

# Set permissions
RUN chown -R www-data:www-data /var/www/html/storage /var/www/html/bootstrap/cache

# Configure Nginx
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Configure Supervisor
COPY supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy kubeconfig
COPY ./kubeconfig /root/.kube/config

# Set environment variables (optional)
ENV AWS_REGION=us-east-1

EXPOSE 80

CMD ["/usr/bin/supervisord", "-n", "-c", "/etc/supervisor/conf.d/supervisord.conf"]
