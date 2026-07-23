const modal = document.getElementById("planetModal");
const modalTitle = document.getElementById("modalTitle");
const modalDescription = document.getElementById("modalDescription");
const closeButton = document.querySelector(".close");

const planetButtons = document.querySelectorAll(".planet-btn");

planetButtons.forEach(function(button) {

    button.addEventListener("click", function() {

        modalTitle.textContent = button.dataset.name;
        modalDescription.textContent = button.dataset.description;

        modal.style.display = "flex";

    });

});

closeButton.addEventListener("click", function() {

    modal.style.display = "none";

});

window.addEventListener("click", function(event) {

    if (event.target === modal) {

        modal.style.display = "none";

    }

});