FROM node:10

# Set working directory for assets
WORKDIR /usr/src/service

# copy the package json and lock files
COPY package*.json ./

# Install all dependencies
RUN npm install 

# Audit and update dependencies
RUN npm audit --fix

# Bundle service
COPY . .

# Expose a port for container access
EXPOSE 8000

# Run the service
CMD ["node", "server.js"]