// "saluti", risultato cartella quarto snack
/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

 const userName = 'Mario';

// // Dichiara la funzione qui.

// /**
//  * Function to say "hello" to a name
//  * 
//  * @param {string} name - name to say hello
//  * @returns {string}
//  */
 const helloName = (name) => `Ciao ${name}`

// // Invoca la funzione qui e stampa il risultato in console

console.log(helloName("Mario"))

//Risultato atteso se si passa 'Mario': // ciao Mario

// ---------------------------------------------------------------------------------

/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';

// Dichiara la funzione qui.

/**
 * Greeting to a name in according to time 
 * 
 * @param {string} name - name to greet
 * @returns {string}
 */
const sayHelloAccordingToHourTo = (name) => {
    const now = new Date()
    let hour = now.getHours() // now.getHours() to set time system - if you delete it and write a number you can set hour manually
    if (hour >= 4 && hour < 13) {
        return `Buongiorno ${name}`
    } else if (hour >= 13 && hour < 17) {
        return `Buon pomeriggio ${name}`
    } else if (hour >= 17 && hour < 23) {
        return `Buonasera ${name}`
    } else if (hour >= 24) {
        return `🔥 Orario inserito manualmente errato! Hai inserito (${hour}). Cambiare orario manuale e riprovare! 🔥 (ore accettate da 0 a 23)`
    } else {
        return `${name} vai a dormire! Buonanotte!`
    }
}
    
// Invoca la funzione qui e stampa il risultato in console

const goodTime = sayHelloAccordingToHourTo(name) // you can also write another name in ("") if you want to greet another name
console.log(goodTime)
alert(goodTime)

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.