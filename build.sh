#!/bin/bash

echo "Starting deployment..."

# Pull changes from remote branch
git pull

# Install dependencies and build project
npm install
npm run build

# Deploy using Surge
npm run generate
surge dist/ --domain finance-x.minhgiau998.surge.sh

echo "Deployment complete."
