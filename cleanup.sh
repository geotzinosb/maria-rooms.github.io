#!/bin/bash

# Maria Rooms Website Cleanup Script
# This script removes old deployment files and keeps only recent ones

set -e  # Exit on any error

echo "🧹 Starting cleanup of old deployment files..."

# Configuration
REPO_DIR="/Users/georgetzinos/projects/maria-rooms.github.io"
DAYS_TO_KEEP=30  # Keep files from last 30 days

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

print_status "Current directory: $(pwd)"
print_status "Keeping files from last $DAYS_TO_KEEP days..."

# Function to get file age in days
get_file_age() {
    local file="$1"
    local current_time=$(date +%s)
    local file_time=$(stat -f %m "$file" 2>/dev/null || stat -c %Y "$file" 2>/dev/null)
    local age_seconds=$((current_time - file_time))
    local age_days=$((age_seconds / 86400))
    echo $age_days
}

# Clean up old service worker files (keep only the most recent)
print_status "Cleaning up old service worker files..."
sw_files=$(find . -maxdepth 1 -name "sw-*.js" -type f | sort -r)
if [ -n "$sw_files" ]; then
    echo "$sw_files" | tail -n +2 | while read -r file; do
        age=$(get_file_age "$file")
        if [ "$age" -gt "$DAYS_TO_KEEP" ]; then
            print_status "Removing old service worker: $(basename "$file") (age: ${age} days)"
            rm -f "$file"
        fi
    done
    print_status "Kept most recent service worker file"
else
    print_warning "No service worker files found"
fi

# Clean up old favicon files (keep only the most recent)
print_status "Cleaning up old favicon files..."
favicon_files=$(find . -maxdepth 1 -name "favicon-*.ico" -type f | sort -r)
if [ -n "$favicon_files" ]; then
    echo "$favicon_files" | tail -n +2 | while read -r file; do
        age=$(get_file_age "$file")
        if [ "$age" -gt "$DAYS_TO_KEEP" ]; then
            print_status "Removing old favicon: $(basename "$file") (age: ${age} days)"
            rm -f "$file"
        fi
    done
    print_status "Kept most recent favicon file"
else
    print_warning "No favicon files found"
fi

# Clean up old JavaScript files in js/ directory
print_status "Cleaning up old JavaScript files in js/ directory..."
if [ -d "js" ]; then
    js_files=$(find js/ -name "*.js" -type f | grep -E "(clear-cache|image-optimizer|lightweight-carousel|main|performance-monitor|swiper)" | sort -r)
    if [ -n "$js_files" ]; then
        echo "$js_files" | tail -n +2 | while read -r file; do
            age=$(get_file_age "$file")
            if [ "$age" -gt "$DAYS_TO_KEEP" ]; then
                print_status "Removing old JS file: $(basename "$file") (age: ${age} days)"
                rm -f "$file"
            fi
        done
        print_status "Kept most recent JavaScript files"
    else
        print_warning "No JavaScript files found in js/ directory"
    fi
else
    print_warning "js/ directory not found"
fi

# Clean up old deployment tracker files
print_status "Cleaning up old deployment tracker files..."
tracker_files=$(find . -maxdepth 1 -name ".deployment-tracker*" -type f | sort -r)
if [ -n "$tracker_files" ]; then
    echo "$tracker_files" | tail -n +2 | while read -r file; do
        age=$(get_file_age "$file")
        if [ "$age" -gt "$DAYS_TO_KEEP" ]; then
            print_status "Removing old deployment tracker: $(basename "$file") (age: ${age} days)"
            rm -f "$file"
        fi
    done
    print_status "Kept most recent deployment tracker file"
else
    print_warning "No deployment tracker files found"
fi

# Show what files remain
print_status "Files remaining after cleanup:"
ls -la | grep -E "\.(js|html|xml|ico)$" | head -10

print_status "Cleanup completed! Old deployment files have been removed."
print_status "Only files from the last $DAYS_TO_KEEP days have been kept."
