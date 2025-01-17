// const people = require("./modules/people")

// console.log(people());

// const { sum, sub } = require("./modules/math")

// console.log(math.sum(1, 2))
// console.log(math.sub(2, 1))

// console.log(sum(1,2))
// console.log(sub(2,2))

// const fs = require('node:fs');

// fs.writeFile("./test.txt", "Ciao Raga!", (err) => {
//     if(err) {
//         console.error(err)
//     } else {
//         console.log("Il file è stato scritto correttamente")
//     }
// });

const { isEmail } = require('validator');

console.log(isEmail("ciao@gmail.com"));