//SCRIVO IN UNA PORZIONE DI HTML

// STEP 1. Raccolgo il div#demo attraverso il metodo getElementById("id")
//Nel 99% dei casi io chiamerò la variabile con il nome dell'id
//ATT: il valore dell'id nell'html deve essere uguale e identico a quello che passiamo al metodo
let demo = document.getElementById("demo");

//STEP 2. Posso modificare il contenuto di questo div. IL nuovo contenuto verrà renderizzato nella pagina html dal browser. Utilizzo la proprietà innerHTML con la quale è possibile leggere/scrivere testo e codice html
demo.innerHTML = "<h3>Questo è un contenuto generato nello script JS</h3>";

//Leggere una porzione di HTML

//Recupero il div con id = "feed"
let feed = document.getElementById("feed");

//salvo in una variabile il testo leggendolo con la propr innerHTML
let contenutoFeed = feed.innerHTML;

console.log("IL contenuto del div con id feed è il seguente: \n" + contenutoFeed );

let soloTestoFeed = feed.textContent;
console.log("Il solo testo del div con id feed è il seguente: \n" + soloTestoFeed);

