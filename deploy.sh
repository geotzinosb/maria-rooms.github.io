#!/bin/bash

# Maria Rooms Website Deployment Script
# This script copies built files and commits/pushes them to GitHub

set -e  # Exit on any error

echo "🚀 Starting Maria Rooms website deployment..."

# Configuration
REPO_DIR="/Users/georgetzinos/projects/maria-rooms.github.io"
BUILD_SOURCE_DIR=""  # Set this to your build output directory
COMMIT_MESSAGE="Update website: $(date '+%Y-%m-%d %H:%M:%S')"

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARNING]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if we're in the right directory
if [ ! -d "$REPO_DIR" ]; then
    print_error "Repository directory not found: $REPO_DIR"
    exit 1
fi

cd "$REPO_DIR"

# Check if this is a git repository
if [ ! -d ".git" ]; then
    print_error "Not a git repository. Please clone the repository first."
    exit 1
fi

# Check git status
print_status "Checking git status..."
git status --porcelain

# If there are no changes, exit
if [ -z "$(git status --porcelain)" ]; then
    print_warning "No changes to commit. Exiting."
    exit 0
fi

# Add all files
print_status "Adding all files to git..."
git add .

# Commit changes
print_status "Committing changes..."
git commit -m "$COMMIT_MESSAGE"

# Check current remote
print_status "Current remote configuration:"
git remote -v

# Ensure we're using the correct SSH host for geotzinosb account
print_status "Ensuring correct SSH configuration..."
if ! git remote get-url origin | grep -q "github-geotzinosb"; then
    print_status "Updating remote to use correct SSH key..."
    git remote set-url origin git@github-geotzinosb:geotzinosb/maria-rooms.github.io.git
fi

# Push to main branch
print_status "Pushing to main branch..."
if git push origin main; then
    print_status "✅ Successfully pushed to GitHub!"
    print_status "🌐 Your website should be updated at: https://geotzinosb.github.io/maria-rooms.github.io/"
else
    print_error "❌ Failed to push to GitHub"
    print_error "This might be due to permission issues."
    print_error "Please ensure you have write access to the repository."
    print_error "Options:"
    print_error "  1. Get added as a collaborator by the repository owner"
    print_error "  2. Use the correct GitHub account credentials"
    print_error "  3. Check your SSH key configuration"
    exit 1
fi

echo "🎉 Deployment completed successfully!"
