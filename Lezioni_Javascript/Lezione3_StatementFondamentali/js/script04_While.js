//Il while fa parte della famiglia dei cicli indefiniti. A priori non so quando terminerà il ciclo
//SINTASSI 
/**
 * while(condizione){
 *  .....
 * }
 *  
 * IL while continua ad essere eseguito fintanto che la sua condizione è vera 
 */

let condizione = true;
let flag = 0;

while(condizione){
    flag++;
    console.log(`Ciao, sto eseguendo il while. Il flag vale: ${flag}`);
    if(flag >= 10){
        condizione = false;
    }
}

//Esempio: trova la password

let password = "";
let tentativi = 0;

while(password !== "abcde"){
    password = window.prompt("Inserisci una password");
    tentativi++;
}

console.log(`Bravo, hai trovato la pass in ${tentativi} tentativi`);


//Posso anche utilizzare il while per poter leggere un array
let nomi = ["Luca", "Andrea", "Laura", "Anna", "Giovanni"];

let i = 0;

while(i < nomi.length){
    console.log(nomi[i]);
    i++;    
}


//do-while 
do{

}while(condizione)