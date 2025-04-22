# Use official PHP with Apache
FROM php:8.1-apache

# Install mysqli and any required PHP extensions
RUN docker-php-ext-install mysqli

# Enable Apache mod_rewrite
RUN a2enmod rewrite

# Set the ServerName to suppress Apache warning
RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

# Copy all project files into the container
COPY . /var/www/html

    
# Set the working directory
WORKDIR /var/www/html

# Set correct permissions (only needed after copying the files)
RUN chown -R www-data:www-data /var/www/html

# Expose port 80
EXPOSE 80
