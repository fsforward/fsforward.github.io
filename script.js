document.addEventListener("DOMContentLoaded", function () {
    
    const links = document.querySelectorAll(".sidebar ul li a");
    const sections = document.querySelectorAll("main section");
    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");
    const logo = document.querySelector(".logo");
    const isDesktop = window.matchMedia('(pointer: fine)').matches;

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute("data-section");

            links.forEach(link => link.classList.remove("active"));
            sections.forEach(section => section.classList.remove("shown"));

            this.classList.add("active");
            document.querySelector(`.${targetSection}`).classList.add("shown");

            if (!isDesktop) {
                // Collapse the sidebar
                sidebar.classList.add("collapsed");
                logo.classList.add("hidden");
            }
        });
    });

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
        logo.classList.toggle("hidden");
    });
    const lockIcons = document.querySelectorAll("i.bx.bxs-lock");

    if (!isDesktop) {
        sidebar.classList.add("collapsed");
        logo.classList.add("hidden");
    
        lockIcons.forEach(lockIcon => {
            const link = lockIcon.parentElement; // Get the <a> element containing the lock icon
            link.removeAttribute("href"); // Remove the href attribute to disable the link
            link.style.pointerEvents = "none"; // Disable pointer events on the link
        });
    } else {
        lockIcons.forEach(lockIcon => {
            lockIcon.style.display = "none"; // Hide each lock icon
        });
    }
    
});