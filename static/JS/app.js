document.addEventListener("DOMContentLoaded", function() {
    const cuadros = document.querySelectorAll(".cuadro");
    const toggleButtons = document.querySelectorAll(".toggleButton");
    const planetButtons = document.querySelectorAll(".planet-button");

    let currentIndex = 0;

    toggleButtons.forEach((toggleButton, index) => {
        toggleButton.addEventListener("click", function () {
            cuadros[currentIndex].classList.add("hidden");

            if (toggleButton.id.includes("nextButton")) {
                currentIndex = (currentIndex + 1) % cuadros.length;
            } else {
                currentIndex = (currentIndex - 1 + cuadros.length) % cuadros.length;
            }

            cuadros[currentIndex].classList.remove("hidden");
        });
    });

    planetButtons.forEach((button) => {
        button.addEventListener("click", function(event) {
            event.preventDefault();

            const targetPlanet = button.getAttribute("data-seccion");
            const targetSection = document.getElementById(targetPlanet);

            if (targetSection) {
                const sectionOffset = targetSection.offsetTop;
                window.scrollTo({
                    top: sectionOffset,
                    behavior: "smooth"
                });
            }
        });
    });

    // Asegurarse de que la primera sección esté visible al cargar la página
    cuadros[currentIndex].classList.remove("hidden");
});







