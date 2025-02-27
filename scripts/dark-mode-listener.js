const dark_mode_buttons = document.querySelectorAll(".dark-mode-button");
dark_mode_buttons.forEach((button) => {
    button.addEventListener("click", () => {
        var nav_button;
        nav_buttons.forEach((button) => {
            nav_button = button
        })

        document.documentElement.classList.toggle("dark-mode");

        if (document.documentElement.classList.contains("dark-mode")) {
            nav_button.style.backgroundImage = "url(/assets/CrownLight.png)"
            button.style.backgroundImage = "url(/assets/DotLight.png)";
        } else {
            nav_button.style.backgroundImage = "url(/assets/CrownDark.png)"
            button.style.backgroundImage = "url(/assets/DotDark.png)";
        }
    });
});