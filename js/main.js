const elencoNumeriDom = document.getElementById("elencoNumeri");
let select = document.getElementById("difficolta");
let numeriDaStampare = 1;
let elencoNumeriDaIndovinare = [];
// let punteggio = [];

select.addEventListener("change",avviaProgramma)

function avviaProgramma (){
   let schermataInizialeDom = document.getElementById("schermataIniziale");
   schermataInizialeDom.innerHTML = "";
   let time;
   let rangeMax;

   if (select.value == "facile"){
      time = 5000;
      rangeMax = 9;
   } else if (select.value == "medio"){
      time = 3000;
      rangeMax = 50; 
   } else if (select.value == "difficile"){
      time = 2000;
      rangeMax = 100; 
   } else if (select.value == "pro"){
      time = 1000;
      rangeMax = 1000; 
   }
   
   for (i = 0; i < numeriDaStampare; i++) {
      elencoNumeriDaIndovinare.push(generateUniqueRandomNumber(elencoNumeriDaIndovinare, 0, rangeMax));
      let numero = `<div>${elencoNumeriDaIndovinare[i]}</div>`;
      elencoNumeriDom.innerHTML += numero;
      elencoNumeriDom.classList.remove("d-none");
   }

   setTimeout(verifica,time * numeriDaStampare);
}

function verifica() {
   let elencoNumeriIndovinati = [];
   let risultatoDom = document.getElementById("risultato");
   let continuare = false;

   elencoNumeriDom.classList.add("d-none");
   for (x = 0; x < numeriDaStampare; x++) {
      let numeroPrompt = parseInt(prompt("Quali numeri ricordi?"));
      if (elencoNumeriDaIndovinare.includes(numeroPrompt)){
         elencoNumeriIndovinati.push(numeroPrompt);
      } else if (numeroPrompt === NaN){                          //non entra mai qua... in caso di "Annulla" nel prompt, vorrei terminare subito il gioco
         x=999; 
         GameOver ();
      }
   }
   
   risultatoDom.classList.remove("d-none");
   if (elencoNumeriIndovinati.length >= elencoNumeriDaIndovinare.length / 2) {
      risultatoDom.innerHTML = `<span>Complimenti!!! Hai indovinato ${elencoNumeriIndovinati.length} numeri (${elencoNumeriIndovinati})</span>`;
      setTimeout(() => {
         continuare = confirm("Vuoi continuare?");
         if (continuare == true) {
            numeriDaStampare++;
            elencoNumeriDaIndovinare = [];
            elencoNumeriIndovinati = [];
            elencoNumeriDom.classList.remove("d-none");
            elencoNumeriDom.innerHTML = "";
            risultatoDom.innerHTML = ``;
            avviaProgramma();
         }  else {
            GameOver();
         }
      }, 2000);
   } 

   function GameOver() {

   risultatoDom.innerHTML = `<span>Hai indovinato ${elencoNumeriIndovinati.length} numeri (${elencoNumeriIndovinati})</span>
                                 <button id="Rigioca" class="btn btn-lg btn-outline-danger">Rigioca</button>`;
      let rigioca = document.getElementById("Rigioca");
      select = null;
      rigioca.addEventListener('click', () => location.reload());
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
   -tasto per non aspettare la fine del tempo
   -contatore punteggio?!
   -migliorare grafica (soprattutto smartphone)

*/
