FROM node

# Set the working directory to /app
WORKDIR  /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install app dependencies
RUN npm install

COPY . /app

# Make port 4000 available to the world outside this container
EXPOSE 4000


# Wait for PostgreSQL to be ready before starting the application


CMD ["node", "index.js"]

