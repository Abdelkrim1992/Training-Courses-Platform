# Base image for Laravel (unchanged from your original Dockerfile)
FROM richarvey/nginx-php-fpm:3.1.6

# Copy all project files
COPY . .

# Install Node.js and npm for Vue.js
RUN apt-get update && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs && \
    npm install -g npm

# Install project dependencies for Vue.js
RUN npm install && npm run build

# Image config
ENV SKIP_COMPOSER 1
ENV WEBROOT /var/www/html/public
ENV PHP_ERRORS_STDERR 1
ENV RUN_SCRIPTS 1
ENV REAL_IP_HEADER 1

# Laravel config
ENV APP_ENV production
ENV APP_DEBUG false
ENV LOG_CHANNEL stderr

# Allow composer to run as root
ENV COMPOSER_ALLOW_SUPERUSER 1

# Start the application
CMD ["/start.sh"]