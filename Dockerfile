# Use an official Node runtime as a parent image
FROM node:18.2.0-alpine

# Set the working directory in the container to /app
WORKDIR /app

# Copy package.json and package-lock.json to /app
COPY package*.json ./

# Install dependencies
RUN npm install --force

# Copy the rest of the application code to the container
COPY . .

# Build the Gatsby project
RUN npm run build

# Expose the port Gatsby is running on
EXPOSE 8000

# Define the command to run your app using CMD which runs Gatsby serve
# CMD ["npm", "run", "serve"]
CMD ["npm", "start"]
