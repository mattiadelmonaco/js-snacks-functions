/* Scrivi una funzione che accetti un'array di stringhe e una lettera e restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];
console.log(names)

// Dichiara la funzione qui.

/**
 * Get word in an array by word's initial
 * 
 * @param {Array} array 
 * @param {String} letter 
 * @returns {string}
 */
const getNameByInitial = (array, letter) => {
    let nameByInitial = []
    for (let i = 0; i < array.length; i++) {
        let name = array[i]
        if (name.substring(0, 1) === letter) {
            nameByInitial.push(name)
        }
    }
    return nameByInitial
}

let nameToSearch = getNameByInitial(names, "A")
console.log(nameToSearch)

// Invoca la funzione qui e stampa il risultato in console


// console.log()
//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]