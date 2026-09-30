function showDetails(title, description) {

    document.getElementById("modalTitle").innerText = title;

    document.getElementById("modalDescription").innerText = description;

    document.getElementById("detailsModal").style.display = "flex";
}


function closeDetails() {

    document.getElementById("detailsModal").style.display = "none";
}


window.onclick = function(event) {

    const modal = document.getElementById("detailsModal");

    if (event.target === modal) {

        modal.style.display = "none";

    }

};