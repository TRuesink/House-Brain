# Use the official NGINX image as the base image
FROM nginx

# Copy the NGINX configuration file to the container
RUN mkdir /etc/nginx/templates
COPY default.conf.template /etc/nginx/templates

# Copy the SSL certificate and key files to the container (if needed)
# COPY ssl.crt /etc/nginx/ssl.crt
# COPY ssl.key /etc/nginx/ssl.key

# Expose port 80 for HTTP traffic

# (Optional) Expose port 443 for HTTPS traffic
# EXPOSE 443

# Start NGINX when the container starts
# CMD ["nginx", "-g", "daemon off;"]
