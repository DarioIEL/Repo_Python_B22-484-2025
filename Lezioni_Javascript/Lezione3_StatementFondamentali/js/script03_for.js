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

//FOROF - MOlto utile. In questo preciso caso lo utilizziamo sugli array
let materie = ["Matematica", "Fisica", "Italiano", "Storia", "Informatica"];


let demoForOf = document.getElementById("demo_for_of");

//In questo caso non ho la possibilità di manipolare gli indici
for(materia of materie){       
    console.log(materia);
    demoForOf.innerHTML += `<li> ${materia} </li>`
}


//FOR - IN - Questo for è stato creato apposta per gli array
let squadre = ["Argentina", "Brasile", "Francia", "Spagna", "Italia"];
let colori = ["txtArg", "txtBra", "txtFra", "txtSpa", "txtIta"];

let demoForIn = document.getElementById("demo_for_in");
for (const indice in squadre) {
   console.log(squadre[indice]);
   demoForIn.innerHTML += `<li class='${colori[indice]}'> ${squadre[indice]} </li>`;
}

//Foreach - Forse è il ciclo for più utilizzato per scorrere un array
let campionati = ["Libertadores", "Serie Brasileira", "France Cup", "Serie A", "La Liga"];

let demoForEach = document.getElementById("demo_for_each");
campionati.forEach(campionato => {
    console.log(campionato);
    demoForEach.innerHTML += `<li> ${campionato} </li>`;
})