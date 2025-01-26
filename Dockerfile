# Base image for Laravel
FROM richarvey/nginx-php-fpm:3.1.6

# Install dependencies for Node.js and npm
RUN apt-get update && \
    apt-get install -y curl gnupg2 lsb-release ca-certificates && \
    curl -fsSL https://deb.nodesource.com/setup_16.x | bash - && \
    apt-get install -y nodejs

# Copy application files
COPY . .

# Set working directory
WORKDIR /var/www/html

# Install Node.js dependencies and build Vue.js assets
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
