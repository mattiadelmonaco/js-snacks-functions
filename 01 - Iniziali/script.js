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

const firstCharacter = (array) => {
    let firstLetter = []
    for (let i = 0; i < names.length; i++) {
        firstLetter.push(names[i].substring(0, 1))
    }
    return firstLetter
}

// Invoca la funzione qui e stampa il risultato in console

firstLetter = firstCharacter(names)
console.log(firstLetter)

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]