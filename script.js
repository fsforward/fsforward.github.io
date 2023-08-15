document.addEventListener("DOMContentLoaded", function () {
    const isDesktop = !window.matchMedia('(pointer: fine)').matches;

    const links = document.querySelectorAll(".sidebar ul li a");
    const sections = document.querySelectorAll("main section");
    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");
    const logo = document.querySelector(".logo");

    // Function to set a cookie
    function setCookie(name, value, days) {
        const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
        document.cookie = `${name}=${value}; expires=${expires}; path=/`;
    }

    // Function to get a cookie
    function getCookie(name) {
        const cookies = document.cookie.split('; ');
        for (const cookie of cookies) {
            const [cookieName, cookieValue] = cookie.split('=');
            if (cookieName === name) {
                return cookieValue;
            }
        }
        return null;
    }

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute("data-section");

            links.forEach(link => link.classList.remove("active"));
            sections.forEach(section => section.classList.remove("shown"));

            this.classList.add("active");
            document.querySelector(`.${targetSection}`).classList.add("shown");

            if (isDesktop) {
                sidebar.classList.add("collapsed");
                logo.classList.add("hidden");
            }

            // Save the selected theme in a cookie
            setCookie("theme", targetSection, 365); // Save for 1 year
        });
    });

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        logo.classList.toggle("hidden");
    });

    if (isDesktop) {
        sidebar.classList.add("collapsed");
        logo.classList.add("hidden");
    }

    // Apply the saved theme from the cookie
    const savedTheme = getCookie("theme");
    if (savedTheme) {
        const savedLink = document.querySelector(`.sidebar ul li a[data-section="${savedTheme}"]`);
        if (savedLink) {
            savedLink.click(); // Trigger a click event to apply the saved theme
        }
    }
});
