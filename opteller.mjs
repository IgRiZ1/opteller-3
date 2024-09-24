// Begin van userInput voorbereiden
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
const userInput = readline.createInterface({input, output});
// Einde van userInput voorbereiden
let som 
let getal1 = parseFloat(await userInput.question('voer een getal? '));

let getal2 = parseFloat(await userInput.question('voer een getal? '));

som = getal1 + getal2

console.log('het som  is'+'',som)


process.exit();