const elencoNumeriDom = document.getElementById("elencoNumeri");
let startDom = document.getElementById("start");
let numeriDaStampare = 1;
let tempo = 2500;
let rangeMax = 10;
let elencoNumeriDaIndovinare = [];
let elencoNumeriIndovinati = [];
let punteggio = [];
let continuare = false;

startDom.addEventListener("click",avviaProgramma)

function avviaProgramma (){
   let schermataInizialeDom = document.getElementById("schermataIniziale");
   schermataInizialeDom.innerHTML = "";
    for (i = 0; i < numeriDaStampare; i++) {
      elencoNumeriDaIndovinare.push(generateUniqueRandomNumber(elencoNumeriDaIndovinare, 1, rangeMax));
      let numero = `<div>${elencoNumeriDaIndovinare[i]}</div>`;
      elencoNumeriDom.innerHTML += numero;
      elencoNumeriDom.classList.remove("d-none");

   }
  
     setTimeout(verifica,tempo * numeriDaStampare);
}

function verifica() {
   let risultatoDom = document.getElementById("risultato");

   elencoNumeriDom.classList.add("d-none");
   for (x = 0; x < numeriDaStampare; x++) {
     let numeroPrompt = parseInt(prompt("Quali numeri ricordi?"));
      if (elencoNumeriDaIndovinare.includes(numeroPrompt)){
         elencoNumeriIndovinati.push(numeroPrompt);
      }
   }
   
   risultatoDom.classList.remove("d-none");
   risultatoDom.innerHTML = `<span>Hai indovinato ${elencoNumeriIndovinati.length} numeri(${elencoNumeriIndovinati})</span>`;
   if (elencoNumeriIndovinati.length >= elencoNumeriDaIndovinare.length / 2) {
      continuare = confirm("Vuoi continuare?");
      if (continuare == true) {
         numeriDaStampare++;
         elencoNumeriDaIndovinare = [];
         elencoNumeriIndovinati = [];
         elencoNumeriDom.classList.remove("d-none");
         elencoNumeriDom.innerHTML = "";
         risultatoDom.innerHTML = ``;
         avviaProgramma();
      }
   } 
} 

function generateUniqueRandomNumber(array, min, max) {

   let isValidNumber = false;
   let randomNumber;

   while (!isValidNumber) {
      randomNumber = Math.floor( Math.random() * (max - min + 1) ) + min;
      if (!array.includes(randomNumber)) {
         isValidNumber = true;
      }
   }
   return randomNumber;
}

/*

-selettore che aumenti il range dei numeri e cali il tempo
-tasto per non aspettare la fine del tempo
-sostituire la prompt "vuoi continuare?" con div+button
-messaggio diverso se perdi
-se clicchi su "annulla" nella prompt, game over/termina il gioco
-contatore punteggio?!
-migliorare grafica (soprattutto smartphone)

*/