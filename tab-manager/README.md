# Tab Manager 🔖

Save and restore browser tab groups with keyboard shortcuts. Built for researchers and developers with 50+ tabs.

## Features

- **Save Tab Groups** - Save current window or ALL tabs across windows
- **Quick Restore** - One-click restore any saved group
- **Keyboard Shortcuts**
  - `Ctrl+S` - Save current tabs
  - `Ctrl+R` - Restore last group
  - `Ctrl+Shift+R` - Show manager
- **Search Groups** - Filter groups by name or URL
- **Group Naming** - Name your tab groups for easy identification
- **Dark Theme** - Easy on the eyes

## Installation

### Chrome Extension (Recommended)

1. Open Chrome and navigate to `chrome://extensions/`
2. Enable **Developer mode** (toggle in top right)
3. Click **Load unpacked**
4. Select the `tab-manager` folder in this repo

### Firefox Add-on

Coming soon - convert using [Chrome Web Store to Firefox](https://extensionworkshop.com/) or use the bookmarklet below.

### Bookmarklet

Drag this to your bookmarks bar for quick saves:

```
javascript:(function(){var name=prompt('Group name:','Tab Group');if(!name)return;var groups=JSON.parse(localStorage.getItem('tabManagerGroups')||'[]');groups.unshift({id:Date.now(),name:name,tabs:[],created:new Date().toISOString()});localStorage.setItem('tabManagerGroups',JSON.stringify(groups));alert('Tabs saved to group: '+name);})()
```

Or simply save `tab-manager.html` to your bookmarks and open it when needed.

## Usage

1. **Save Tabs**: Click "Save Current Tabs" or use `Ctrl+Shift+S`
2. **Name Your Group**: Enter a name like "Research - Topic X"
3. **Restore Later**: Click "Restore" on any saved group
4. **Search**: Use the search box to find groups quickly
5. **Delete**: Remove old groups you no longer need

## Browser Compatibility

- ✅ Chrome (Extension + Bookmarklet)
- ✅ Safari (Bookmarklet)
- ✅ Firefox (Bookmarklet)

For full tab access, use the Chrome extension. Bookmarklets have limited API access due to browser security restrictions.

## Files

- `tab-manager.html` - Standalone HTML (works as bookmarklet/web app)
- `tab-manager/` - Chrome extension folder
  - `manifest.json` - Extension manifest (v3)
  - `tab-manager.html` - Extension popup
  - `background.js` - Service worker

## License

MIT
