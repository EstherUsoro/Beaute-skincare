document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.querySelector(".toggle-button");
    const body = document.body;

    if (localStorage.getItem("theme") === "dark") {
        body.classList.add("dark-theme");
    }

    if (toggleButton) {
        toggleButton.addEventListener("click", () => {
            body.classList.toggle("dark-theme");
            localStorage.setItem("theme", body.classList.contains("dark-theme") ? "dark" : "light");
        });
    }

    document.querySelectorAll("nav ul li a").forEach(anchor => {
        anchor.addEventListener("click", function (event) {
            event.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 50,
                    behavior: "smooth"
                });
            }
        });
    });

    document.querySelectorAll(".hero-button, .buy-button, form button").forEach(button => {
        button.addEventListener("click", () => {
            button.classList.add("clicked");
            setTimeout(() => {
                button.classList.remove("clicked");
            }, 300);
        });
    });
});
