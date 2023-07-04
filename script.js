const changeThemeBody = document.querySelector("#changeTheme");
const switcher = document.querySelector("#switchTheme");

switcher.addEventListener('click', () => {
    if (switcher.checked) {
        changeThemeBody.setAttribute("data-bs-theme", "dark");
    } else {
        changeThemeBody.setAttribute("data-bs-theme", "light");
    }
});

/*
OU
switcher.addEventListener('click', () => {
    const modo = switcher.checked ? 'dark' : 'light';
    changeThemeBody.setAttribute('data-bs-theme', modo);
})
*/