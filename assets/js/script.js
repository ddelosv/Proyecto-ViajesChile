// script para que la barra de navegacion cambie de color al desplazarse.
$(document).ready(function () {
    var navbar = $('.navbar');
    var scrollThreshold = 600; //se Ajustar el punto de desplazamiento para la transición.

    $(window).scroll(function () {
        if ($(window).scrollTop() > scrollThreshold) {
            navbar.addClass('navbar-scroll');
        } else {
            navbar.removeClass('navbar-scroll');
        }
    });
});




// script para habilitación funcion Tooltip.
document.addEventListener("DOMContentLoaded", function (event) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="mensaje"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});