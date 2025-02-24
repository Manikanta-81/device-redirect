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
1. The script listens for the page to load completely.  
2. It checks the user agent to determine if the device is **Android** or **iOS**.  
3. If a match is found:  
   - Android users are redirected to **Google Play Store**.  
   - iOS users are redirected to **Apple App Store**.  
4. If the device is unsupported, a message is displayed instead.  

## 🌐 Live Demo  
🔗 **[View Deployment](https://manikanta-81.github.io/device-redirect/)**  

## 📂 Repository  
🔗 **[GitHub Repo](https://github.com/Manikanta-81/device-redirect)**  

## 🛠 How to Use  
1. Clone this repository.  
2. Open the `index.html` file in a web browser.  
3. The script will detect your device and redirect accordingly.  

## 📌 Notes  
- Replace the default store links with your actual app links.  
- Ensure JavaScript is enabled in the user's browser for redirection to work.  

## 📄 License  
This project is open-source and available under the **MIT License**.  

---  
🔗 **Developed by Manikanta**  
