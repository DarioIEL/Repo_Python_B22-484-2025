//-------OPERATORI MATEMATICI-------
/**
 * + somma
 * - sottrazione
 * / divisione
 * * moltiplicazione
 */

//Operatori di autoincremento
let num1 = 5;

num1 += 2; //num1 = num1 + 2
num1 += 3;

console.log(num1); //10

parola = "Ciao ";
parola += "come ";
parola += "stai ?";
console.log(parola);

//Operatore di autodecremento
let num2 = 20;
num2 -= 5;
num2 -= 3;

console.log(num2); // 12

//Operatore di automoltiplicazione
let num3 = 4;
num3 *= 2;

console.log(num3); //8

//Operatore di autodivisione
let num4 = 46;
num4 /= 2;
num4 /= 3;

console.log(num4);

//Altri operatori matematici usando la libreria Math
let num5 = 6;
num5 = Math.pow(num5, 3);
console.log(num5);

let num6 = 81;
console.log(Math.sqrt(num6));
console.log(Math.abs(-25)); //abs è la parte positiva di un numero 

//Arrotondamento
let num7 = 12.5;

console.log(Math.ceil(num7)); //13
console.log(Math.floor(num7)); //12

//Random - produce un numero casuale tra 0 e 1
let numRand = Math.random();
console.log(numRand);

//Numeri random da 1 a 10
let numRand10 = Math.ceil( Math.random() * 10 );
console.log(numRand10);

//Numeri random da 10 a 25
let numRand1025 = Math.ceil( Math.random() * 15) + 10;
console.log(numRand1025);














