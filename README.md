# VIAJES CHILE

**VIAJES CHILE** es un proyecto web, elaborado como prueba final para mostrar los conocimientos adqueridos del module 2 fundamentos de desarrollo.

## Tabla de contenidos:
- Descripción.
- Tecnologías utilizadas.
- Caracteristicas implementadas.
- Ejemplo funcion utilizada.

## Descripción
El sitio web **viajes Chile**, es un sitio web que utiliza tecnologías front-end para crear una experiencia interactiva y atractiva.

## Tecnologías utilizadas
Este proyecto utiliza las siguientees tecnologías:
- HTML5
- CSS3
- JavaScript
- Bootstrap
- FontAwesome 6
- Google Font

### DevOps:
- VS Code
- Git
- GitHub
- GitHub Pages
- Herramienta de inpección web mozilla firefox.


## Caracteristicas:

 - **Diseño Responsivo**: El sitio web está diseñada para adaptarse a diferentes tamaños de pantalla, desde dispositivos móviles hasta computadoras de escritorio.

- **Estilos con CSS3**: Se han aplicado estilos personalizados utilizando CSS3 para lograr una apariencia visual agradable y coherente en toda la aplicación.

- **Bootstrap**: Se ha utilizado Bootstrap para agilizar el desarrollo y aprovechar sus componentes predefinidos, como la barra de navegación, tarjetas y botones.

- **JavaScript y jQuery**: Se han implementado interacciones dinámicas utilizando JavaScript y jQuery. Por ejemplo, se puede hacer clic en un titulo para mostrar u ocultar el contenido del parrafo.

- **Google Fonts**: Se ha integrado dos fuente personalizada de Google Fonts para mejorar la legibilidad del texto.

- **Git y GitHub**: Se Gestiona el código fuente utilizando Github, inicializando GIT para versionar el proyecto localmente, realizando 5 o más commits y se crea la página en Github Pages.


## Ejemplo función utilizada

***Script de javascript***  cuya funcionalidad es que la barra de navegacion cambie de color al desplazarse:
```java
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
```

