//Le funzioni come in quasi tutti i linguaggi sono un "wrapper" di codice. Cioè mi permettono di mettere assieme più righe di codice e lanciarle a comando o quando succede qualcosa(a seguito di un evento)

//Sintassi delle funzioni
// function nomeFunzione(parametriOpzionali){
//     //corpo della funzione

//     return qualcosaOpzionale;
// }

//dichiaro la funzione
function saluta(){
    console.log("Ciao, Dario !!");
}

//richiamo la funzione
saluta();


//dichiaro una funzione con i parametri
function salutaDocente(nomeDocente, cognomeDocente, materiaDocente){
    console.log(`Ciao, ${nomeDocente} ${cognomeDocente}!! Sei il docente di ${materiaDocente}`);
}

//Quando richiamo la funzione che ha un parametro allora devo passargli i paratri necessari, in base al numero di paramentri che ho dichiarato
salutaDocente("Oscar", "Vecchione", "DB");

//Attenzione i parametri possono essere di tutti i tipi
function sommaNumeri(num1, num2){
    let somma = num1 + num2;
    console.log(`Il risultato della somma vale: ${somma}`);
}

sommaNumeri(8, 9);

//Funzioni con return 
function somma(num1, num2){
    let somma = num1 + num2;
    return somma; //Quando una funzione ha un return questo valore che viene restituito deve essere "raccolto" da qualcosa: può essere una variabile oppure un'altra cosa
}

function moltiplica(num1, num2){
    let prod = num1 * num2;
    return prod;
}

function sottrai (num1, num2){
    let sott = num1 - num2;
    return sott;
}

function dividi(num1, num2){
    let div = num1 / num2;
    return div;
}

//Il risultato lo posso raccogliere in una variabile
// let add = somma(5,8);
// console.log(add);

//Il risultato lo posso direttamente raccogliere in un console.log
// console.log(somma(10, 5));

//Allo stesso modo posso sfruttare, richiamare queste funzioni dentro altre funzioni
function calcolaTutto(num1, num2){
    let add = somma(num1, num2);
    let sot = sottrai(num1, num2);
    let mol = moltiplica(num1, num2);
    let div = dividi(num1, num2);

    console.log(`I risultati delle operazioni sono le seguenti: \nSomma: ${add}\nSottrazione: ${sot} \nMoltiplicazione: ${mol} \nDivisione: ${div}`);

    return `I risultati delle operazioni sono le seguenti:<br>Somma: ${add}<br>Sottrazione: ${sot} <br>Moltiplicazione: ${mol} <br>Divisione: ${div}`;
    
}

calcolaTutto(19, 56);

//Queste funzioni possono essere richiamate anche dallo HTML 
let btn = document.getElementById("btn");
let demo = document.getElementById("demo");

//applico un evento al pulsante in modo tale da poter lanciare la funzione quando clicco sul pulsante 
//REGOLA: quando richiamo una funzione DIRETTAMENTE nell'eventListener allora la devo richiamare senza le parentesi tonde

// btn.addEventListener("click", calcolaTutto); //In questo preciso caso alla funzione calcolaTutto devo passare 2 parametri, come faccio a passarli se non posso mettere le parentesi tonde ? 
//Uso una funzione anonima nell'eventListener
btn.addEventListener("click", function(){
    //recupero i miei due numeri dai campi input per passarli alla funzione calcolaTutto(). Utilizzo il .value per prendere quello che scrive l'utente, cioè solo il valore
    let num1 = Number(document.getElementById("num1").value);
    let num2 = Number(document.getElementById("num2").value);


    //ATTENZIONE: tutte le volte che recupero qualcosa dal mio html, campi input ecc sono SEMPRE delle STRINGHE
    if(num1 != "" && num2 != ""){
        demo.innerHTML = calcolaTutto(num1, num2); //qui utilizzo il return della mia funzione
    }else{
        demo.innerHTML = "<h2> Non hai inserito correttamente i numeri"
    }
})
