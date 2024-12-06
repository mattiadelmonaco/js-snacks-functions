/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const userName = 'Mario';

// Dichiara la funzione qui.

/**
 * Function to say "hello" to a name
 * 
 * @param {string} name - name to say hello
 * @returns {string}
 */
const helloName = (name) => `Ciao ${name}`

// Invoca la funzione qui e stampa il risultato in console

console.log(helloName(userName)) // userName or string with a name

//Risultato atteso se si passa 'Mario': // ciao Mario
