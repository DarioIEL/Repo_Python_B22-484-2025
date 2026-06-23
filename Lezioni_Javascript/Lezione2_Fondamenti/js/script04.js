let cose = [
    "computer",
    "matita",
    "penna",
    "mouse",
    "tastiera",
    "ventilatore"
]

//Per richiamare i singoli elementi utilizzo gli indici
console.log(cose[3]); //mouse
console.log(cose[0]); //primo elemento
console.log(cose[cose.length - 1]); //ultimo elemento

//proprietà length che ci fornisce il numero di elementi presenti in un array
console.log(cose.length);

//METODI PER ARRAY: i metodi sono un po' come delle funzioni. Manipolano, modificano, trasformano gli oggetti su quali li applicamo. Chiamiamo metodi quelle funzioni legate ad un particolare tipo di oggetti. In questo caso gli array sono proprio degli oggetti sui quali applichiamo dei metodi specifici

//push() - aggiunge un elemento in coda all'array
cose.push("Smartphone");
console.log(cose);

//unshift() - aggiunge in cima all'array
cose.unshift("condizionatore");
console.log(cose);

//pop() - elimina l'ultimo elemento
cose.pop();
console.log(cose);

//shift() - elimina il primo elemento
cose.shift();
console.log(cose);

//Metodi per cercare qualcosa. Verificare se un elemento esiste all'interno dell'array
console.log( cose.includes("matita") ); //true
console.log( cose.includes("usb") ); //false

console.log( cose.indexOf("penna") ); // 2 - L'indice nel quale si trova quell'esatto elemento
console.log( cose.indexOf("bottiglia")); // -1 - Questo valore viene restituito quando non viene trovato un elemento

//Metodi per invertire un array
let arrayRev = cose.reverse();
console.log(arrayRev);

//sort() - mette in ordine alfabetico oppure in ordine di grandezza dal più piccolo al più graande
console.log(cose.sort()); 


//find() - permette di ricercare qualcosa nell'array dando una condizione. ATT: ci restituisce la prima occorrenza che rispetta la condizione. Prova a sostituire 8 con 3 e vedrai che ti darà solo il primo elemento
let trovato = cose.find((cosa) => cosa.length > 8 );
console.log(trovato);

//filter() - restituisce un array di elementi che rispettano quella condizione e non uno solo
let filtrati = cose.filter((cosa) => cosa.length > 6);
console.log(filtrati);

//Operatore spread: permette di fondere più array in un unico solo array. Oppure permette di inserire un elemento all'interno di un array

let primoArray = ["Mela", "Pesca", "Fragola"];
let secondoArray = ["Anguria", "Ciliegia", "Kiwi"];

let frutti = [...primoArray,...secondoArray];
console.log(frutti);


//Leggere un array con il foreach(). Anche questo è un metodo specifico per gli array 

let demo = document.getElementById("demo");
frutti.forEach(frutto => {
    console.log(frutto);
    demo.innerHTML += `<p> ${frutto} </p>`;
})