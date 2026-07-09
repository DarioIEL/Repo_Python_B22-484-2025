let mioArray =  [10,11,98,67,4,33,11,6,58,4,11];
let tuoArray =  [13,654,34,2,31,12,4,6,2,45,55];


/**
 * 
 * @param {Number[]} arNumeri 
 */
function cercaDoppioni(arNumeri){
    
    let doppioni = [];
    
    for(let i = 0; i < arNumeri.length; i++){
        for(let j = i + 1 ; j < arNumeri.length; j++){
            if(arNumeri[i] === arNumeri[j] && !doppioni.includes(arNumeri[i])){
                doppioni.push(arNumeri[i]);
            }
        }
    }

    return doppioni;
}

console.log(cercaDoppioni(mioArray));
console.log(cercaDoppioni(tuoArray));
