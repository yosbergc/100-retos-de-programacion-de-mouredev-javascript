/*
 * Escribe una función que reciba dos palabras (String) y retorne
 * verdadero o falso (Bool) según sean o no anagramas.
 * - Un Anagrama consiste en formar una palabra reordenando TODAS
 *   las letras de otra palabra inicial.
 * - NO hace falta comprobar que ambas palabras existan.
 * - Dos palabras exactamente iguales no son anagrama.
 */

function isAnagram(word1, word2) {
    let firstWord = word1.toLowerCase().split('').sort().join('')
    let secondWord = word2.toLowerCase().split('').sort().join('')
    if (typeof word1 !== 'string' || typeof word2 !== 'string') {
        console.log('Solo se aceptan strings')
    } else if (word1 === word2) {
        console.log('Ambas palabras son iguales, no es un anagrama.')
    } else if (word1.length !== word2.length) {
        console.log('Las palabras tienen una distinta cantidad de letras, no es un anagrama')
    } else {
        if (firstWord == secondWord) {
            console.log('Es un anagrama')
        } else {
            console.log('No es un anagrama')
        }
    }
}
isAnagram('COSA', 'SACO')