const elencoNumeriDom = document.getElementById("elencoNumeriDom");
let numeriDaStampare = 1;
let rangeMax = 100;
let elencoNumeriDaIndovinare = [];
let elencoNumeriIndovinati = [];
var continuare = false;

avviaProgramma();

function avviaProgramma (){
    for (i = 0; i < numeriDaStampare; i++) {
        elencoNumeriDaIndovinare.push(generaNumeroRandom(1, rangeMax));
     }
  
     document.getElementById("elencoNumeriDom").innerHTML = elencoNumeriDaIndovinare;
     setTimeout(verifica,numeriDaStampare * 3000);
}

function verifica() {
   elencoNumeriDom.classList.add("d-none");
   for (x = 0; x < numeriDaStampare; x++) {
     let numeroPrompt = parseInt(prompt("Quali numeri ricordi?"));
      if (elencoNumeriDaIndovinare.includes(numeroPrompt)){
         elencoNumeriIndovinati.push(numeroPrompt);
      }
   }
   
   document.getElementById("risultato").innerHTML = `Hai indovinato ${elencoNumeriIndovinati.length} numeri(${elencoNumeriIndovinati})`;
   if (elencoNumeriIndovinati.length >= elencoNumeriDaIndovinare.length / 2) {
      continuare = confirm("Vuoi continuare?");
      if (continuare == true) {
         numeriDaStampare++;
         elencoNumeriDaIndovinare = [];
         elencoNumeriIndovinati = [];
         elencoNumeriDom.classList.remove("d-none");
         document.getElementById("risultato").innerHTML = ``;
         avviaProgramma();
      }
   } 
} 


function generaNumeroRandom(min, max) {
   const numeroRandom = Math.floor( Math.random() * (max - min + 1) ) + min;
   return numeroRandom;
}