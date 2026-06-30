//i++ si chiama operatore di post-incremento i = i + 1

//FOR-CLASSICO
//for(inizializzazione; condizione; aggiornamento){ }
//IL mio ciclo for gira, itera, cicla fin tanto che la condizione risulta essere true.
//La i può essere chiamata INDICE
for(let i = 0; i < 3; i++){
    console.log(`Ciao ${i}`);
    //1° giro --- (i = 0; 0 < 3 (true); 1) {.....}
    //2° giro --- (i = 1; 1 < 3 (true); 2) {.....}
    //3° giro --- (i = 2; 2 < 3 (true); 3) {.....}
    //4° giro --- (i = 3; 3 < 3 (false) ...) Qui si interrompe il giro 
}

console.log("Il for parte da 1 adesso");

for(let i = 1; i <= 3; i++){
    console.log(`Ciao ${i}`);   
}

console.log("For al contrario");
for(let i = 3; i > 0; i--){
    console.log(`Ciao ${i}`);
}

//ATT: può capitare di finire in un loop infinito. Praticamente il mio for non termina mai
let demoClassico = document.getElementById("demo_classico");

//indici           0        1        2         3
let mioArray = ["Penna", "Matita", "PC", "Ventilatore"];
for(let i = 0; i < mioArray.length; i++){
    console.log(mioArray[i]);
    demoClassico.innerHTML += `<li>${mioArray[i]} </li>`; 
}