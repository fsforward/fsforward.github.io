const lightTheme = {
    mainBgColor: '#f8f8f8',
    textColor: '#333333',
    headerBgColor: '',
    headerColor: '#ff84d0',
    projectTableHeaderBgColor: '#ff9dbb',
    projectTitleColor: '#ff6b88',
};

const darkTheme = {
    mainBgColor: '#333333',
    textColor: '#ffffff',
    headerBgColor: '',
    headerColor: '#ffffff',
    projectTableHeaderBgColor: '#444444',
    projectTitleColor: '#ffffff',
};

const applyTheme = (theme) => {
    document.querySelector('main').style.backgroundColor = theme.mainBgColor;
    document.querySelector('main').style.color = theme.textColor;
    document.querySelectorAll('h1, h2, h3, h4, h5, h6').forEach(heading => {
        heading.style.color = theme.headerColor;
    });
    document.querySelector('.header').style.backgroundColor = theme.headerBgColor;
    document.querySelectorAll('th').forEach(th => {
        th.style.backgroundColor = theme.projectTableHeaderBgColor;
        th.style.color = theme.textColor;
    });
    document.querySelectorAll('.project-title').forEach(title => title.style.color = theme.projectTitleColor);
    document.querySelector('.theme-buttons').style.backgroundColor = theme.themeButtonsBgColor;
    // document.querySelectorAll('.theme-buttons button').forEach(button => {
    //     button.style.backgroundColor = theme.themeButtonsBgColor;
    //     button.style.color = theme.themeButtonsTextColor;
    // });
};

// Apply the light theme by default when the page loads
applyTheme(lightTheme);

document.getElementById('light-theme').addEventListener('click', () => {
    applyTheme(lightTheme);
});

document.getElementById('dark-theme').addEventListener('click', () => {
    applyTheme(darkTheme);
});
