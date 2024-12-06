/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];
console.log(names)

// Dichiara la funzione qui.

/**
 * Get first character of an array
 * 
 * @param {Array} array - array's name
 * @returns {String}
 */

const getFirstCharacter = (array) => {
    let firstCharacter = []
    for (let i = 0; i < array.length; i++) {
        firstCharacter.push(array[i][0])
    }
    return firstCharacter
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getFirstCharacter(names))

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]