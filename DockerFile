# Use an official Node.js LTS (Long Term Support) image as the base
FROM node:18-alpine AS builder

# Set environment variables for Node.js
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /app

# Install Git (only if necessary for building; otherwise, avoid it)
RUN apk add --no-cache git

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy the rest of the application code
COPY . .

# Build the application (if there's a build step; otherwise, you can skip this)
# RUN npm run build

# Use a non-root user to run the application
FROM node:18-alpine

# Create a group and user for running the app
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set environment variables
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /app

# Copy only necessary files from the builder stage
COPY --from=builder /app ./

# Change ownership to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Expose the port your app runs on
EXPOSE 3000

# Define the command to run your app
CMD ["npm", "start"]
