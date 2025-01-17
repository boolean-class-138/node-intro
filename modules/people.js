// 1. Importa la tua funzione da names.js
// 2. Importa la tua funzione da hobbies.js
// 3. Crea una funzione che non ha parametri. La funzione dovrebbe restituire un oggetto con due proprietà: fullName ed hobbies. All'interno della tua funzione, usa le tue due funzioni precedenti per costruire l'oggetto.
const names = require("./names");
const getHobbies = require("./hobbies")

const people = () => {
    const person = names("Samuele", "Madrigali")
    const firstName = person.firstName
    const lastName = person.lastName
    // Destrutturazione degli oggetti
    // const {firstName, lastName} = names("Samuele", "Madrigali")
    const hobbies = getHobbies("mangiare", "bere", "pregare")

    return {
        fullName: `${firstName} ${lastName}`,
        hobbies
    }
}

module.exports = people