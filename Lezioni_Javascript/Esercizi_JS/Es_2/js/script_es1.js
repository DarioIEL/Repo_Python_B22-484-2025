let listaCose = [
    "Acqua",
    "Ventilatore",
    "Pasta",
    "Biscotti",
    "Pane",
    "Verdura",
    "Ghiaccioli",
    "Gelato",
    "Insalata",
    "Nutella"
];
let listaCosti = [
    1.80,
    19.99,
    0.75,
    1.44,
    1.2,
    0.75,
    3.5,
    6.5,
    0.35,
    5.80
];

//Recupero gli elementi HTML che sono nella pagina
let elScontrino = document.getElementById("elScontrino");
let elTotale = document.getElementById("elTotale");
let elementoSubTotale = document.getElementById("elSubTotale")
let elIVA =document.getElementById("elIVA");

// listaCose.sort(); //ATT: se ordino solo la lista perdo il legame con il prezzo. Questo perché abbiamo 2 array separati che non hanno nessuna relazione tra loro

//Vado a riempire elScontrino con un ciclo for iterato sui prodotti acquistati
for(let i = 0; i < listaCose.length; i++){
    // let li = document.createElement("li");
    // li.textContent = listaCose[i];
    // elScontrino.appendChild(li);

    elScontrino.innerHTML += "<li>" + listaCose[i] + " - € "+ listaCosti[i] + "</li>";
}

let totaleScontrino = 0;

for(let prezzo of listaCosti){
    totaleScontrino += prezzo;
}

elTotale.innerHTML = `<h2>Total: ${totaleScontrino} € </h2>`;

let costoIVA =( totaleScontrino * 22) / 100;
elIVA.innerHTML = `<h4> Iva: ${costoIVA.toPrecision(3)} € </h3>`;

let subTotale = totaleScontrino - costoIVA;
elementoSubTotale.innerHTML = `<h4> Sub: ${subTotale.toPrecision(3)} € </h3> `

