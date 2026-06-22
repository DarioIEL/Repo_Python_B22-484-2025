let etaUser = prompt("Quanti anni hai ? ");

//ATT: quando acquisisco qualcosa da un prompt oppure da un campo input, javascript lo considera sempre come stringa e non come numero. Sono obbligato a fare il cast del dato

let demo = document.getElementById("demo");

if(etaUser <= 0 || etaUser == ""){
    alert("Mi dispiace, hai inserito un'età non valida");
    demo.innerHTML = "Mi dispiace, hai inserito un'età non valida";
}else{
    let nuovaEta = Number(etaUser) + 10;
    demo.innerHTML = `<h1>Tra 10 anni avrai ${nuovaEta} anni</h1>`;
    demo.innerHTML += "Grazie per aver utilizzato il nostro calcolatore"
}


