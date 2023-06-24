document.addEventListener('DOMContentLoaded', function () {
    var isNotDesktop = !window.matchMedia('(pointer: fine)').matches;
    var logoImg = document.getElementById('logo-img');
    var menuIcon = document.querySelector('.menu-icon');

    if (isNotDesktop) {
        logoImg.style.display = 'none';
        menuIcon.style.display = 'block';
    } else {
        logoImg.style.display = 'block';
        menuIcon.style.display = 'none';
    }
});

function toggleSidebar() {
    var sidebar = document.querySelector('.sidebar');
    var sidebarLeft = window.getComputedStyle(sidebar).getPropertyValue('left');

    if (sidebarLeft === '-200px') {
        sidebar.style.left = '0';
    } else {
        sidebar.style.left = '-200px';
    }

    var menuIcon = document.querySelector('.menu-icon');
    menuIcon.classList.toggle('active');
}

var slideButtons = document.getElementsByClassName('slideButton');
var contents = document.getElementsByClassName('content');

for (var i = 0; i < slideButtons.length; i++) {
    slideButtons[i].addEventListener('click', toggleSlide);
}

function toggleSlide() {
    var content = this.nextElementSibling;
    var chevronIcon = this.querySelector('.bx-chevron-down');

    if (content.classList.contains('hidden')) {
        content.classList.remove('hidden');
        setTimeout(function () {
            content.style.height = content.scrollHeight + 'px';
        }, 10);
        chevronIcon.style.transform = 'rotate(180deg)';
    } else {
        content.style.height = '0';
        setTimeout(function () {
            content.classList.add('hidden');
        }, 500);
        chevronIcon.style.transform = 'rotate(0deg)';
    }
}

function toggleSlider() {
    var slider = document.getElementById("slider");
    var background = document.getElementById("background");

    slider.classList.toggle("on");
    background.classList.toggle("hide");
}
