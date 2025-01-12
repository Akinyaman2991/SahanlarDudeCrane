// Dark Mode Toggle
document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
});

// Cookie Consent
document.addEventListener("DOMContentLoaded", () => {
    const cookieBanner = document.getElementById("cookieBanner");
    const acceptCookies = document.getElementById("acceptCookies");

    if (!localStorage.getItem("cookieAccepted")) {
        cookieBanner.style.display = "block";
    }

    acceptCookies.addEventListener("click", () => {
        localStorage.setItem("cookieAccepted", "true");
        cookieBanner.style.display = "none";
    });
});
