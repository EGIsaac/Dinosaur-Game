let numeroSecreto = Math.floor(Math.random() * 100) + 1; // Genera un número aleatorio entre 1 y 100 y lo almacena en la variable.
let intentos = 0; // Inicializa el contador de intentos en 0.

function adivinar() { // Función que se llama cada vez que el usuario intenta adivinar el número.

    let intento = document.getElementById("numero").value; // Obtiene el número introducido por el usuario en el campo con el numero.
    intentos++; // Aumenta el número de intentos en cada ejecución de la función.

    if (intento == numeroSecreto) { // Verifica si el número introducido coincide con el número.
        document.getElementById("resultado").innerText = "¡Correcto! Adivinaste en " + intentos + " intentos."; // Muestra un mensaje de éxito con el número de intentos en el elemento con el resultado.

    } else if (intento < numeroSecreto){ // Verifica si el número ingresado es menor que el número aleatorio.
        document.getElementById("resultado").innerText = "El número es mayor. Inténtalo de nuevo."; // Muestra un mensaje indicando que el número secreto es mayor que el numero ingresado.

    } else { // Si el número ingresado es mayor que el número secreto.
        document.getElementById("resultado").innerText = "El número es menor. Inténtalo de nuevo."; // Muestra un mensaje indicando que el número secreto es menor que el numero ingresado.
    }
}
