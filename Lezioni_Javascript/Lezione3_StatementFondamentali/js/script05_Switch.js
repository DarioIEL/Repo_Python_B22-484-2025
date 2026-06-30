//Switch controlla il valore di una variabile, non una semplkice condizione booleana

let giornoDellaSettimana = 2;

switch(giornoDellaSettimana){
    case 1:
        console.log("Oggi è Lunedì");
    break;

    case 2:
        console.log("Oggi è Martedì");
    break;

    case 3:
        console.log("Oggi è Mercoledì");
    break;

    case 4:
        console.log("Oggi è Giovedì");
    break;

    case 5:
        console.log("Oggi è Venerdì");
    break;

    case 6:
        console.log("Oggi è Sabato");
    break;

    case 7:
        console.log("Oggi è Domenica");
    break;

    default:
        console.log("Hai inserito un valore 'giorno della settimana' non valido");
    break
}