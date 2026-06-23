let studenti = [
    "Anna Rossi",
    "Pippo Bianchi",
    "Luca Verdi",
    "Luisa Gialli",
    "Marco Marchi",
    "Paolo De Paoli",
    "Maria Marini"    
];

let numeroStudenti = studenti.length ; // 7

let voti = [
    30,
    25,
    18,
    28,
    22,
    27,
    29
];

//ATT: i due array non hanno nessuna relazione. La relazione che noi stabiliamo è una relazione finta. Per poterlimettere in correlazione dovremo utilizzare gli oggetti. 

let elencoStudenti = document.getElementById("elencoStudenti");

//Con il forof non posso ciclare su due array contemporaneamente. Per cui utilizzerò un for classico.
// for(stud, voto of studenti){
//     elencoStudenti.innerHTML += `<li> ${stud} - ${}`
// }

//In questo caso, i è l'indice che scorrerà l'array. Questo indic parte da 0 e raggiunge la studenti.length - 1
for(let i = 0; i < studenti.length; i++){
    elencoStudenti.innerHTML += `<li> ${studenti[i]} - ${voti[i]} </li>`
}

///PROVO A FARE LA STESSA COSA MA CON 2 DIV SEPARATI: uno per i nomi, uno per i voti

