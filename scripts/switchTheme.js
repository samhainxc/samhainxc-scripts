const themeButton = document.querySelector(".theme-button");

themeButton.addEventListener("click", (e) => {
    const theme = document.documentElement.getAttribute("data-theme");
    if (theme === "light") {
        document.documentElement.setAttribute("data-theme", "dark");
    } else document.documentElement.setAttribute("data-theme", "light");
});
