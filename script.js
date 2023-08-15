document.addEventListener("DOMContentLoaded", function () {
    const isDesktop = !window.matchMedia('(pointer: fine)').matches;

    const links = document.querySelectorAll(".sidebar ul li a");
    const sections = document.querySelectorAll("main section");
    const toggleButton = document.querySelector(".toggle-button");
    const sidebar = document.querySelector(".sidebar");

    links.forEach(link => {
        link.addEventListener("click", function (event) {
            event.preventDefault();
            const targetSection = this.getAttribute("data-section");

            links.forEach(link => link.classList.remove("active"));
            sections.forEach(section => section.classList.remove("shown"));

            this.classList.add("active");
            document.querySelector(`.${targetSection}`).classList.add("shown");

            if (isDesktop) {
                // Collapse the sidebar
                sidebar.classList.add("collapsed");
            }
        });
    });

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
    });

    if (isDesktop) {
        sidebar.classList.add("collapsed");
    }
});
