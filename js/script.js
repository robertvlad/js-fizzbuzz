// 1 - Realizzare un ciclo for che va da 1 a 100
// 2 - Inserire una condizione all'interno del for per verificare se il numero è multiplo di 3, di 5 o di entrambi
//     2.1 - SE è multiplo di 3 e non di 5 stampa FIZZ        
//     2.2 - SE è multiplo di 5 e non di 3 stampa BUZZ
//     2.3 - SE è multiplo di e e di 5 stampa FIZZBUZZ
//     2.4 - ALTRIMENTI stampa il numero
// 3 - Creare un container nel DOM e mostare per ogni elemento il numero o la stringa associata
// 4 - Definire un colore diverso per ongi tipologia di output

const container = document.querySelector (".container")

for (let i=1; i<=100; i++){

    if (i % 3 == 0 && i % 5 == 0){
        let textInside = "FizzBuzz"
        container.innerHTML += '<div class="square square-fizzbuzz">' + textInside + '</div>'
        console.log("FizzBuzz")
    }
    else if (i % 3 == 0){
        let textInside = "Fizz"
        container.innerHTML += '<div class="square square-fizz">' + textInside + '</div>'
        console.log("Fizz")
    }
    else if (i % 5 == 0){
        let textInside = "Buzz"
        container.innerHTML += '<div class="square square-buzz">' + textInside + '</div>'
        console.log("Buzz")
    }
    else{
        container.innerHTML += '<div class="square square-normal">' + i + '</div>'
        console.log(i)
    }
}