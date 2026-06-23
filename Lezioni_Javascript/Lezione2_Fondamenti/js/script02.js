//DEFINIZIONE di ARRAY
//Gli array sono definiti attraverso le parentesi quadre []
//Gli array, per concetto, sono dei contenitori di elementi simili tra loro (stesso tipo di dato)
//Gli array sono 0-based: ogni elemento dell'array ha un indice, questo indice parete da 0

//                     0        1       2       3          4        5 
let nomiStudenti = ["Paola", "Anna", "Marco", "Laura", "Andrea", "Pippo"];

//Se voglio richiamare un esatto elemento lo posso fare attraverso il suo id

//primo studente ??
console.log(nomiStudenti[0]);

//ultimo studente ??
console.log(nomiStudenti[nomiStudenti.length - 1]);

//proprietà length
console.log(`Nel mio array ci sono ${nomiStudenti.length} nomi`);

//LEGGERE un ARRAY; scorrere elemnento per elemento
//Utilizzo un ciclo for (JS esistono 4 tipi diversi di for. Quello più simile a python è il forof)

for(let nome of nomiStudenti){
    console.log(nome);
}

let elencoStudenti = document.getElementById("elencoStudenti");

for (let nome of nomiStudenti){
    // += operatore di autoincremento
    elencoStudenti.innerHTML += `<li>${nome}</li>`;
}

