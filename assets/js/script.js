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

//Hacer click desaparecer y aparecer el contenido en todas las tarjetas "card" de la sección de lugares destacados.
$('h5').click(function () {
    $(this).parent().find('#lugar').toggle();
});

//Al hacer doble click a etiqueta h3, solamente modificar el color del texto de los títulos H3. 
$("h3").dblclick(function () {
    $(this).css({
        "color": "green"
    });
});

//Utilizar el evento “click” de jquery para mostrar una alerta al hacer un clic sobre el botón de "Enviar por Correo".
$('#enviarCorreo').click(function () {
    alert('El correo fue enviado correctamente.');
});


//Botón scroll volver Arriba.
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('#scroll').fadeIn();
        } else {
            $('#scroll').fadeOut();
        }
    });

    $('#scroll').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 600);
        return false;
    });
});

// script para habilitación funcion Tooltip.
document.addEventListener("DOMContentLoaded", function (event) {
    const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="mensaje"]');
    const tooltipList = [...tooltipTriggerList].map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl));
});