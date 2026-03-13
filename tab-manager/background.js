// Tab Manager - Background Service Worker

// Open tab manager when clicking extension icon
chrome.action.onClicked.addListener((tab) => {
    chrome.tabs.create({ url: 'tab-manager.html' });
});

// Keyboard shortcut: Ctrl+Shift+T to open manager
chrome.commands.onCommand.addListener((command) => {
    if (command === 'open-manager') {
        chrome.tabs.create({ url: 'tab-manager.html' });
    }
});

// Keyboard shortcut: Ctrl+Shift+S to save current window
chrome.commands.onCommand.addListener((command) => {
    if (command === 'save-tabs') {
        chrome.tabs.query({ currentWindow: true }, (tabs) => {
            const group = {
                id: Date.now(),
                name: `Quick Save ${new Date().toLocaleTimeString()}`,
                tabs: tabs.map(t => ({ url: t.url, title: t.title })),
                created: new Date().toISOString()
            };
            
            chrome.storage.local.get(['tabManagerGroups'], (result) => {
                const groups = result.tabManagerGroups || [];
                groups.unshift(group);
                chrome.storage.local.set({ tabManagerGroups: groups });
            });
        });
    }
});
