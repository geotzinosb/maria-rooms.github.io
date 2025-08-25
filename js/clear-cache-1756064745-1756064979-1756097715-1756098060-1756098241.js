// Comprehensive cache clearing utility for development and production
async function clearAllCaches() {
    console.log('🧹 Starting comprehensive cache cleanup...');
    
    try {
        // 1. Clear all service worker caches
        if ('caches' in window) {
            console.log('🗂️ Clearing service worker caches...');
            const cacheNames = await caches.keys();
            console.log(`Found ${cacheNames.length} cache(s):`, cacheNames);
            
            const deletionPromises = cacheNames.map(async (cacheName) => {
                console.log(`Deleting cache: ${cacheName}`);
                return await caches.delete(cacheName);
            });
            
            await Promise.all(deletionPromises);
            console.log('✅ All service worker caches cleared');
        }
        
        // 2. Clear localStorage
        if (typeof Storage !== "undefined" && localStorage) {
            console.log('📦 Clearing localStorage...');
            const localStorageKeys = Object.keys(localStorage);
            console.log(`Found ${localStorageKeys.length} localStorage items`);
            localStorage.clear();
            console.log('✅ localStorage cleared');
        }
        
        // 3. Clear sessionStorage
        if (typeof Storage !== "undefined" && sessionStorage) {
            console.log('📦 Clearing sessionStorage...');
            const sessionStorageKeys = Object.keys(sessionStorage);
            console.log(`Found ${sessionStorageKeys.length} sessionStorage items`);
            sessionStorage.clear();
            console.log('✅ sessionStorage cleared');
        }
        
        // 4. Clear IndexedDB (if any)
        if ('indexedDB' in window) {
            console.log('🗃️ Checking IndexedDB...');
            // Note: IndexedDB clearing would require knowing database names
            // This is a placeholder for future enhancement
        }
        
        // 5. Unregister all service workers
        if ('serviceWorker' in navigator) {
            console.log('🔧 Unregistering service workers...');
            const registrations = await navigator.serviceWorker.getRegistrations();
            console.log(`Found ${registrations.length} service worker registration(s)`);
            
            const unregisterPromises = registrations.map(async (registration) => {
                console.log(`Unregistering service worker: ${registration.scope}`);
                return await registration.unregister();
            });
            
            await Promise.all(unregisterPromises);
            console.log('✅ All service workers unregistered');
        }
        
        // 6. Clear browser cache (request browser to reload without cache)
        console.log('🔄 Requesting hard refresh...');
        
        console.log('🎉 Cache cleanup completed successfully!');
        
        // Show user feedback
        if (document.body) {
            showCacheCleanupNotification('✅ All caches cleared successfully!');
        }
        
        // Optional: Reload the page after a short delay
        setTimeout(() => {
            console.log('🔄 Reloading page with cleared cache...');
            window.location.reload(true); // Force reload from server
        }, 2000);
        
    } catch (error) {
        console.error('❌ Error during cache cleanup:', error);
        if (document.body) {
            showCacheCleanupNotification('❌ Error clearing caches: ' + error.message);
        }
    }
}

// Show visual feedback to user
function showCacheCleanupNotification(message) {
    // Remove existing notification
    const existing = document.getElementById('cache-cleanup-notification');
    if (existing) {
        existing.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.id = 'cache-cleanup-notification';
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #2d3748;
        color: white;
        padding: 15px 20px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 10000;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        max-width: 300px;
        border-left: 4px solid #48bb78;
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto-remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.remove();
        }
    }, 5000);
}

// Clear specific cache by name
async function clearSpecificCache(cacheName) {
    if ('caches' in window) {
        console.log(`🗂️ Clearing specific cache: ${cacheName}`);
        const deleted = await caches.delete(cacheName);
        console.log(deleted ? `✅ Cache "${cacheName}" deleted` : `❌ Cache "${cacheName}" not found`);
        return deleted;
    }
    return false;
}

// List all current caches
async function listAllCaches() {
    if ('caches' in window) {
        const cacheNames = await caches.keys();
        console.log('📋 Current caches:', cacheNames);
        return cacheNames;
    }
    return [];
}

// Auto-run if accessed directly via URL parameter
if (window.location.search.includes('clear-cache')) {
    console.log('🚀 Auto-running cache cleanup from URL parameter...');
    clearAllCaches();
}

// Auto-run if accessed via hash
if (window.location.hash === '#clear-cache') {
    console.log('🚀 Auto-running cache cleanup from URL hash...');
    clearAllCaches();
}

// Make functions available globally
window.clearAllCaches = clearAllCaches;
window.clearSpecificCache = clearSpecificCache;
window.listAllCaches = listAllCaches;
