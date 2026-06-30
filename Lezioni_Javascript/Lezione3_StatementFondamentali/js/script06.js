//Esempi per capire come annidare due statement
//Leggi l'array e quando incontri il numero 8 ti fermi

let numeri = [ 10, 1, 8, 9, 33, 5, 42, 36, 8, 7];

for(let i = 0 ; i < numeri.length; i++){

    if(numeri[i] == 8){
        console.log("Ho trovato il numero 8");
        break; //con il break posso "stoppare" il ciclo for
    } 

    console.log(numeri[i]);
}

//Altro esercizio. Quando incontri il numero 42 "salta il giro" e stampa "DON'T PANIC". Vuol dire che quando lui incontra il numero 42 non lo deve stampare, gli altri sì.

console.log("--- ESERCIZIO DON'T PANIC ---");

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] == 42){
        console.log("DON'T PANIC");
        continue; //con il continue posso "saltare un giro". Praticamente quando viene letto continue ritorno in alto nel ciclo for
    }
    console.log(numeri[i]);
}
