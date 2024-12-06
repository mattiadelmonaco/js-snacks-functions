/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.

/**
 * How many vowels are in a word
 * 
 * @param {string} word - word to know how many vowels has
 * @returns {Number}
 */

const howManyAndWhichVowelsAreIn = (word) => {
    let vowelsFound = []
    for (i = 0; i < word.length; i++) {
        let letter = word[i].toUpperCase()
     if (letter === "A" || letter === "E" || letter === "I" || letter === "O" || letter === "U") {
        vowelsFound.push(letter)
    }
} return vowelsFound.length, vowelsFound
}


// Invoca la funzione qui e stampa il risultato in console

const howManyVowels = howManyAndWhichVowelsAreIn ("javascript")
console.log (howManyVowels)

//Risultato atteso se si passa 'javascript': 3 (a, a, i)