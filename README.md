# 📝 NexusList - Shared Lists

> Create and share shopping lists, reminders, and to-do lists with your family in real-time.

[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://mjcpro.github.io/nexuslist/)
[![PWA](https://img.shields.io/badge/PWA-enabled-blue)](https://mjcpro.github.io/nexuslist/)
[![Firebase](https://img.shields.io/badge/backend-Firebase-orange)](https://firebase.google.com/)

## ✨ Features

- **📱 Multi-Platform**: Works on Android, iOS, Windows, Mac, and Linux
- **🔄 Real-Time Sync**: Changes sync instantly across all your devices
- **👥 Family Sharing**: Share lists with family members via Google sign-in
- **🛒 Multiple List Types**: Shopping lists, reminders, and to-do lists
- **🎨 Custom Lists**: Create unlimited custom lists for any purpose
- **📊 Smart Counters**: See active item counts on each list
- **🔍 Search**: Quickly find items across your lists
- **🌙 Dark Mode**: Easy on the eyes with dark theme support
- **📴 Offline Ready**: Works offline with Progressive Web App technology
- **🔐 Secure**: Google authentication for privacy and security

## 🚀 Quick Start

1. Visit [https://mjcpro.github.io/nexuslist/](https://mjcpro.github.io/nexuslist/)
2. Sign in with your Google account
3. Start creating lists!

### Install as PWA

**On Mobile:**
- iOS: Tap Share → Add to Home Screen
- Android: Tap menu → Install App

**On Desktop:**
- Chrome: Click install icon in address bar
- Edge: Click ... → Apps → Install NexusList

## 📖 How to Use

### Creating Lists

1. **Default Lists**: Click bubble buttons (Shopping, Reminder, To-do)
2. **Custom Lists**: Select "➕ New list type..." from dropdown
3. **Quick Switch**: Tap any bubble to instantly switch lists

### Managing Items

- **Add Item**: Type name, quantity (optional), priority, then click Add
- **Check/Uncheck**: Mark items as complete
- **Search**: Use 🔍 button to filter items
- **Delete**: Remove individual items or clear all completed

### Sharing Lists

All lists automatically sync to devices using the same Google account. Lists are private to your account.

## 🛠️ Technology Stack

- **Frontend**: Pure HTML5, CSS3, JavaScript (no frameworks)
- **Backend**: Firebase Realtime Database
- **Authentication**: Firebase Auth (Google OAuth)
- **Hosting**: GitHub Pages
- **PWA**: Service Worker with offline caching

## 📊 Project Structure

```
nexuslist/
├── index.html          # Main application
├── manifest.json       # PWA manifest
├── pwabuilder-sw.js   # Service worker
├── privacy.html        # Privacy policy
├── nexuslist-icon.png # App icon (512x512)
└── README.md          # This file
```

## 🔒 Privacy & Security

- Data stored securely in Firebase
- Google authentication required
- No data sold to third parties
- See [Privacy Policy](https://mjcpro.github.io/nexuslist/privacy.html)

## 📈 Analytics

This app uses Google Analytics to track:
- Page views
- Feature usage
- Device types

No personal data is collected beyond what's required for app functionality.

## 🐛 Known Issues

- Service worker caching may require hard refresh (Ctrl+Shift+R) to see updates
- Custom lists sync may take a few seconds on first load

## 🤝 Contributing

This is a personal project, but suggestions are welcome!

1. Fork the repository
2. Create a feature branch
3. Submit a pull request

## 📧 Contact & Feedback

Questions or feedback? Email: [mjcpro@outlook.com](mailto:mjcpro@outlook.com)

## 📄 License

This project is open source and available for personal use.

## 🙏 Acknowledgments

- Firebase for backend infrastructure
- GitHub Pages for hosting
- PWABuilder for PWA guidance

---

**Made with ❤️ by Mjcpro** | [Live App](https://mjcpro.github.io/nexuslist/) | [Report Issue](https://github.com/Mjcpro/nexuslist/issues)
