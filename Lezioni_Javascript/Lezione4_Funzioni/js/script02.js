//Abbiamo 2 tipologie di variabili quando sviluppiamo. 
//VARIABILI GLOBALI
//VARIABILI LOCALI

//Dichiaro nel mio file una variabile, fuori dalle funzioni, direttamente nello script
//Questa sotto è una variabile Globale (ha una visibilità molto ampia)
let nomePC = "Ubuntu";

function usaPC(){
    console.log(`Sto usando un pc con il seguente SO: ${nomePC}`);
}

function accendiPC(){
    nomePC = "Windows"
    console.log(`Benvenuto su ${nomePC}`);
}

//ATT: quello che conta è l'ordine col quale richiamiamo una funzione. Non conta la dichiarazione. 
accendiPC();
usaPC();

//QWuando invece una variabile è dichiarata all'interno di una funzione sto dichiarando una variabile locale "invisibile" alle altre funzioni

function salutaUtente(){
    let nomeUtente = "Dario";
    console.log(`Ciao, ${nomeUtente}`);
}

salutaUtente();

function salutaDocente(){
    console.log(`Ciao ${nomeUtente}`); //ATT: io non posso assolutamente richiamare una variabile definita all'interno di un'altra funzione
}

// salutaDocente();


//CASO LIMITE
let nomeStudente = "Anna Rossi";

function iscriviStudente(){
    console.log(`Stai iscrivendo al corso la studentessa ${nomeStudente}`)
}

function iscriviAlCorso(){
    let nomeStudente = "Pippo Verdi";
    console.log(`Stai collegando lo studente ${nomeStudente}`);
    //OSS: a parità di nome "vince" la variabile locale su quella globale. E' un pò come se venisse sovrascritta
}

nomeStudente = "Mario Gialli";
iscriviStudente();
iscriviAlCorso();

//Vediamo come una variabile globale si comporta con gli statement


for(let i = 0; i <= 100; i++){
    // var variabileFlag = 42; //Con il var la mia variabile diventa visibile anche all'esterno del for.
    let variabileFlag = 42; //Con il let questa variabile è puramente locale, quindi visibile solo nel for
    if(i == variabileFlag){
        console.log("Don't Panic");
    }else{
        console.log(i);
    }
}

//Questa trattazione (let & var) sopra VALE SOLO NEGLI STATEMENT (for, if, while, switch), NON VALE NELLE FUNZIONI

if(variabileFlag == 42){
    console.log(`Hai trovato il numero ${variabileFlag}`);
}