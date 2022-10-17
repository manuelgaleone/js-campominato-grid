/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

- Ogni cella ha un numero progressivo, da 1 a 100.

- Ci saranno quindi 10 caselle per ognuna delle 10 righe.

- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

//Seleziono il bottone dalla DOM
let startButton = document.getElementById("startButton");
let container = document.querySelector(".container");

//Creo i quadratini
let maxSquare = 100; 
let square = `<div class="square"></div>`

startButton.addEventListener("click", function() {
    
    squareGenerator(maxSquare, container);
    
});

//Creo la funzione che mi genera i quadratini nella DOM
function squareGenerator (maxSquare, squarePlace) {

    for (let i = 0; i < maxSquare; i++) {

        squarePlace.innerHTML += square;

    }

};
