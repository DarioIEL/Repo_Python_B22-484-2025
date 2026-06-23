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

let altraStringa = `Ciao, sono ${nomeUser}`;

//TIPI DI DATO
//Stringhe, identificate con ""
let parole = "Ciao";
let frase = "Oggi è solo Lunedì e fa molto caldo";
let nomeAmico = "Paolo";

//Number, sono i numeri ma possono essere di due tipi (Integer, Float)
let eta = 30; //Number( Integer )
let altezza = 178.5; //Number ( Float )

//Boolean, sono il tipo di dato più semplice. Può assumere solo 2 valori: True, False
let presenza = true;
let acceso = false;

//ATT: Javascript è un linguaggio debolmente tipizzato, cioè i tipi esistono ma non li devo specificare nel momento in cui dichiaro un variabile. 
//Posso verificare il tipo di dato utilizzando la funzione typeof
console.log("La variabile nomeAmico è di tipo: " + typeof nomeAmico);
console.log("La variabile eta è di tipo: " + typeof eta);


//Provo a mandare JS in confusione
let num1 = 42;
let num2 = 6;

console.log("Il risultato della somma vale: " + num1 + num2);


let somma = num1 + num2;

// let fraseRisultato = "Il risultato della somma vale: " + num1  + num2;
let fraseRisultato  = "Il risultato della somma vale: " + somma;

console.log(fraseRisultato);

//Provo a mandare in confusione gli studenti

let num3 = "8";
let num4 = "16";

// let somma2 = num3 + num4; 
let somma2 = Number(num3) + Number(num4); //Questa operazione si chiama CAST del dato: forzare una variabile ad essere di un determinato tipo
// let somma2 = parseInt(num3) + parseInt(num4);

/**
 * Proprio perché JS è debolmente tipizzato, il codice viene interpretato  e num3 e num4 vengono trattati come numeri se messi in relazione con operazioni matematiche. Questo non vale con la somma +  
 */ 
let prod = num3 * num4;
let quoz = num3 / num4;
let sott = num3 - num4;

console.log("La somma vale: " + somma2);
console.log("Il prodotto vale: " + prod);
console.log("Il quoziente vale: " + quoz);
console.log("La differenza vale: " + sott);