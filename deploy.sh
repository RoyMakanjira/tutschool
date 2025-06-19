#!/bin/bash

# Build the application
npm run build

# Create deployment package
tar -czf deploy.tar.gz \
    .next \
    public \
    package.json \
    package-lock.json \
    next.config.ts \
    server.js \
    ecosystem.config.js \
    .env.production 