//Il metodo setInterval serve a lanciare un blocco di codice ogni tot di millisecondi

let orologio = document.getElementById("orologio");

let tempo = 0;

function contaTempo(){
    
    let data = new Date();
    let ore = data.getHours() < 10 ? `0${data.getHours()}` : `${data.getHours()}`;
    let min = data.getMinutes() < 10 ? `0${data.getMinutes()}` : `${data.getMinutes()}`;
    let sec = data.getSeconds() < 10 ? `0${data.getSeconds()}` : `${data.getSeconds()}`;
    
    let oraEsatta = `${ore} : ${min} : ${sec}`;

    orologio.innerHTML = `<h2> ${oraEsatta} </h2`;
}


setInterval(() => {
    contaTempo();
}, 1000);

//Questo mi permette invece di lanciare una funzione dopo un tot di millisecondi
setTimeout(() => {
    console.log("Ciao dal timeout");
}, 5000);


//Creo un timer multiuso in minuti
const btn = document.getElementById("btn");
const timer = document.getElementById("timer");

function impostaTimer(){
    let minutiTimer = document.getElementById("minutiTimer").value;
    btn.setAttribute("disabled", true);
    document.getElementById("minutiTimer").value = "";  
    let millisecondiTimer = minutiTimer * 60 * 1000;
    let secondiTimer = minutiTimer * 60;
    
   setInterval(()=>{
        if(secondiTimer >= 0){
            timer.innerHTML = `<h2> Ti mancano: ${secondiTimer} </h2>`;
            secondiTimer--;    
        }
    }, 1000)
    
    setTimeout(()=> {
        console.log("TEMPO SCADUTO");
        timer.innerHTML = "<h2> TEMPO SCADUTO </h2>"
    }, millisecondiTimer);
     
}


btn.addEventListener("click", impostaTimer);
