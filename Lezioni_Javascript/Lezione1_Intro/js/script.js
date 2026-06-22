console.log("Hello, World!!");

//Dichiarato e valorizzato una variabile di tipo String
//le variabili sono, per convenzione, denominate in camelCase (variabili e funzioni)
//PascalCase (per le classi), snake_case (variabili e funzioni), kebab-case(NO)
let nomeUser = "Dario";
var cognomeUser = "Mennillo";

//inizializzo
let etaUser;

//assegno
etaUser = 37;

console.log("Ciao, " + nomeUser + " " + cognomeUser + ". Hai " + etaUser + " anni");

//Faccio una concatenazione tra stringhe usando il simbolo +
let stringaDiPresentazione = "Ciao, questo è il programma di " + nomeUser + " " + cognomeUser;
console.log(stringaDiPresentazione);

//Faccio una concatenazione tra stringhe usando il backtick ` (Alt + 96) e il ${}
let miaStringa = `Ciao, mi chiamo ${nomeUser} ${cognomeUser} e ho ${etaUser} anni`;
console.log(miaStringa);

let altraStringa = `Ciao, sono ${nomeUser}`