function calcular() {
    // Obtener el valor del primer número ingresado por el usuario y convertirlo a un número flotante
    let num1 = parseFloat(document.getElementById("num1").value);

    // Obtener el valor del segundo número ingresado por el usuario y convertirlo a un número flotante
    let num2 = parseFloat(document.getElementById("num2").value);

    // Obtener el tipo de operación seleccionada por el usuario (+, -, *, /)
    let operacion = document.getElementById("operacion").value;

    // Variable para almacenar el resultado de la operación
    let resultado;

    // Verificar si ambos números son válidos
    if (isNaN(num1) || isNaN(num2)) {
        // Si uno de los valores no es un número, mostrar un mensaje de advertencia
        document.getElementById("resultado").innerText = "Por favor, ingresa ambos números.";
        return;  // Detener la ejecución de la función si no se ingresaron ambos números
    }

    // Realizar la operación según la opción seleccionada por el usuario
    switch (operacion) {
        case "+":
            // Sumar los dos números
            resultado = num1 + num2;
            break;
        case "-":
            // Restar los dos números
            resultado = num1 - num2;
            break;
        case "*":
            // Multiplicar los dos números
            resultado = num1 * num2;
            break;
        case "/":
            // Verificar si el segundo número es 0 para evitar división por 0
            if (num2 === 0) {
                // Si el segundo número es 0, mostrar un mensaje de error
                document.getElementById("resultado").innerText = "No se puede dividir por 0.";
                return;  // Detener la ejecución de la función si se intenta dividir por 0
            }
            // Si el segundo número no es 0, realizar la división
            resultado = num1 / num2;
            break;
        default:
            // Si la operación seleccionada no es válida, mostrar un mensaje de error
            resultado = "Operación no válida";
    }

    // Mostrar el resultado de la operación en el elemento con resultado
    document.getElementById("resultado").innerText = "Resultado: " + resultado;
}