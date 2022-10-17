/*

L'utente clicca su un bottone che genererà una griglia di gioco quadrata.

- Ogni cella ha un numero progressivo, da 1 a 100.

- Ci saranno quindi 10 caselle per ognuna delle 10 righe.

- Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.

*/

//Seleziono il bottone dalla DOM
let startButton = document.getElementById("startButton");
let annullaButton = document.querySelector(".annullaButton");
let container = document.querySelector(".container");

//Creo i quadratini
let maxSquare = 100; 

startButton.addEventListener("click", function() {
    
    squareGenerator(maxSquare, container);
    
});

//Creo la funzione che mi genera i quadratini nella DOM
function squareGenerator (maxSquare, squarePlace) {
    
    for (let i = 1; i < maxSquare + 1; i++) {
        
        let square = `<div id="squareDiv" class="square"><span class="indexNumber">${i}</span></div>`;
        squarePlace.innerHTML += square;

    }

}

//Creo la funzione di click
let squareEl = document.getElementById("squareDiv");

squareEl.addEventListener("click", function() {


    document.getElementById("squareDiv").classList.add("squareActive");
    document.getElementById("squareDiv").classList.remove("square");

}); 

//Elimino i quadratini
annullaButton.addEventListener("click", function() {
    
    squareRemover();
    
});

//Creo la funzione di reset DOM
function squareRemover () {

    squareEl.classList.add("none");

}