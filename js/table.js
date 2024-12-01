// Función para abrir el modal y mostrar la imagen en tamaño grande
function openModal(imgSrc) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");
    modal.style.display = "block";
    modalImg.src = imgSrc;
}

// Cierra el modal cuando se hace clic fuera de la imagen
var modal = document.getElementById("myModal");
modal.onclick = function() {
    modal.style.display = "none";
};
