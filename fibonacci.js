/*
 * Escribe un programa que imprima los 50 primeros números de la sucesión
 * de Fibonacci empezando en 0.
 * - La serie Fibonacci se compone por una sucesión de números en
 *   la que el siguiente siempre es la suma de los dos anteriores.
 *   0, 1, 1, 2, 3, 5, 8, 13...
 */

function fibonacci(limit) {
    let numeros = [0, 1];
    for (i = 0; i < limit - 2; i++) {
        numeros.push(numeros[i] + numeros[i + 1]);
    }
    console.log(numeros)
}
fibonacci(50)