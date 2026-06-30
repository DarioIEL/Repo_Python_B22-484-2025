let miaEta = 237;

if (miaEta >= 18) {
    console.log("Sei maggiorenne");
}else {
    console.log("Sei minorenne");
}

if(miaEta >= 18 && miaEta <= 130 ){
    console.log("Sei maggiorenne");
}else if(miaEta >= 0 && miaEta < 18){
    console.log("Sei minorenne");
}else{
    console.log("Hai inserito un valore non valido");
}

//Esempio - club privato. Per entrare nel club devi possedere l'invito ed essere maggiorenne

let etaPersona = 15;
let invito = true;

if(etaPersona >= 18 && invito){
    console.log("Ciao, puoi entrare nel club");
}else if( etaPersona < 18 && invito){
    console.log("Anche se hai l'invito non puoi entrare perché non sei maggiorenne");
}else if(etaPersona >= 18 && !invito){
    console.log("Hai l'età giusta per entrare ma ti manca l'invito");
}else{
    console.log("Mi spiace, non puoi proprio entrare. Non sei maggiorenne e non hai un invito");
}


//Esempio - posso entrare nel club in due modi: possiedo un invito oppure sono semplicemente maggiorenne

if(etaPersona >= 18 || invito){
    console.log("Ciao benvenuto, puoi entrare");
}else{
    console.log("Mi spiace, non hai l'invito e non sei neppure maggiorenne");
    
}