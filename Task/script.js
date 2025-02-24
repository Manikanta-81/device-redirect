document.addEventListener("DOMContentLoaded", function () {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    console.log("User-Agent Detected:", userAgent);

    const playStoreUrl = "https://play.google.com";
    const appStoreUrl = "https://apps.apple.com/";

    if (/android/i.test(userAgent)) {

        console.log("Redirecting to Play Store...");

        window.location.href = playStoreUrl;

    } else if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {

        console.log("Redirecting to App Store...");

        window.location.href = appStoreUrl;

    } else {
        document.getElementById("messagae").innerText = "Device not recognized. So Please visit the store manually.";
        console.log("")

    }
}); 

