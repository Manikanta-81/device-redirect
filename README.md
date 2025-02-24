# Device Redirect Webpage

This project detects whether the user's device is **Android** or **iOS** and automatically redirects them to the appropriate app store:
- **Google Play Store** for Android devices
- **Apple App Store** for iOS devices

## 📌 Features
✅ Detects user device type using `navigator.userAgent`  
✅ Redirects Android users to the **Google Play Store**  
✅ Redirects iOS users to the **Apple App Store**  
✅ Displays a message if the device is unsupported  

## 🚀 How It Works
1. The script listens for the `DOMContentLoaded` event.
2. It checks the `navigator.userAgent` for Android or iOS patterns.
3. If a match is found:
   - Android users are redirected to **Google Play Store**.
   - iOS users are redirected to **Apple App Store**.
4. If no match is found, a message is displayed instead.

## 📜 Code Implementation

### **HTML File (`index.html`)**
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Device Redirect</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            text-align: center;
            padding: 20px;
        }
        h1 {
            font-size: 24px;
        }
        .message {
            margin-top: 20px;
            font-size: 18px;
        }
    </style>
</head>
<body>
    <h1>Redirecting You...</h1>
    <p class="message" id="message">Detecting your device...</p>

    <script src="script.js"></script>
</body>
</html>
