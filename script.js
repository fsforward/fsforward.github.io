document.addEventListener("DOMContentLoaded", function () {
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
        });
    });

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
    });
});

document.addEventListener("DOMContentLoaded", function () {
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
        });
    });

    toggleButton.addEventListener("click", function () {
        sidebar.classList.toggle("collapsed");
    });
});

function isMobileWithoutPointer() {
    return matchMedia('(hover: none) and (pointer: coarse)').matches;
}

function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.classList.toggle('collapsed');
}

document.addEventListener('DOMContentLoaded', function () {
    if (isMobileWithoutPointer()) {
        toggleSidebar();
    }

    const toggleButton = document.querySelector('.toggle-button');
    toggleButton.addEventListener('click', toggleSidebar);
});
