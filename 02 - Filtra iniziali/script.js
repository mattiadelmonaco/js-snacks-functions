/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names)

// Dichiara la funzione qui.

/**
 * Get word in an array by word's initial
 * 
 * @param {Array} array - array's name
 * @param {String} letter - initial letter (in "")
 * @returns {string}
 */
const getWordByInitial = (array, letter) => {
    let wordsByInitial = []
    for (let i = 0; i < array.length; i++) {
        const currentWord = array[i]
        if (currentWord[0].toUpperCase() === letter.toUpperCase()) {
            wordsByInitial.push(currentWord)
        }
    }
    return wordsByInitial
}

// Invoca la funzione qui e stampa il risultato in console

console.log(getWordByInitial(names, "A"))

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]