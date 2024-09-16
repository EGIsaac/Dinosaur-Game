var contador = 1; // Lleva el registro de la imagen que se está mostrando
var temporizador; // Se utiliza para almacenar el temporizador que controlará el cambio de imágenes
var activo = false; // Indica si el temporizador que rota las imágenes está en funcionamiento

// Inicia la rotación de imágenes automática
function iniciar() {
    if (!activo) {  // Solo se ejecuta si la rotación no está activa
        temporizador = setInterval(rotarImagenes, 3000);  // Configura la rotación para que cambie cada 3 segundos
        activo = true;  // Cambia el estado a activo para evitar que se inicie de nuevo mientras ya está corriendo
    }
}

// Detiene la secuencia automática de rotación de imágenes
function detener() {
    clearInterval(temporizador);  // Elimina el temporizador, deteniendo la rotación
    activo = false;  // Cambia el estado a inactivo para permitir reiniciar en el futuro
}

// Cambia la imagen mostrada por la siguiente en la secuencia
function rotarImagenes() {
    if (contador >= 10) {  // Reinicia el contador si ha llegado al final de la secuencia de imágenes
        contador = 0;
    }

    var img = document.getElementById('imgSlide');  // Localiza el elemento de la imagen en la página usando su ID
    img.src = './images/img' + ++contador + '.jpg';  // Actualiza la imagen con la siguiente en la secuencia
}