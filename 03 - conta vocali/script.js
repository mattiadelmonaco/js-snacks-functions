/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * How many vocals are in a word
 * 
 * @param {string} word - word to know how many vocals has
 * @returns {Number}
 */

const howManyAndWhichVocalsAreIn = (word) => {
    let vocalsFound = []
    for (i = 0; i < word.length; i++) {
        let letter = word[i].toUpperCase()
     if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        vocalsFound.push(letter)
    }
} return vocalsFound.length, vocalsFound
}


// Invoca la funzione qui e stampa il risultato in console

const howManyVocals = howManyAndWhichVocalsAreIn ("javascript")
console.log (howManyVocals)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)