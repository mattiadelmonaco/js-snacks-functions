// "saluti", risultato cartella quarto snack
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

console.log(helloName("Mario"))

//Risultato atteso se si passa 'Mario': // ciao Mario



/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';



// Dichiara la funzione qui.


// Invoca la funzione qui e stampa il risultato in console



//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.