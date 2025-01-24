# Stage 1: Build Stage
FROM node:18-alpine AS builder

# Set environment variables
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /app

# Install Git (only if necessary; otherwise, avoid it)
RUN apk add --no-cache git

# Clone the repository
RUN git clone https://github.com/ghostfighter50/BadgeAPI . 

# Copy package.json and package-lock.json to leverage Docker cache
COPY package*.json ./

# Install dependencies using npm ci
RUN npm ci --only=production

# Stage 2: Production Stage
FROM node:18-alpine

# Create a non-root user
RUN addgroup -S appgroup && adduser -S appuser -G appgroup

# Set environment variables
ENV NODE_ENV=production

# Create and set the working directory
WORKDIR /app

# Copy dependencies from the builder stage
COPY --from=builder /app/node_modules ./node_modules

# Copy the rest of the application code
COPY --from=builder /app ./

# Change ownership to the non-root user
RUN chown -R appuser:appgroup /app

# Switch to the non-root user
USER appuser

# Expose the application's port
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
