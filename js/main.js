const elencoNumeriDom = document.getElementById("elencoNumeriDom");
let elencoNumeriDaIndovinare = [];
let numeriDaStampare = 5;
let elencoNumeriIndovinati = [];

for (i = 1; i <= numeriDaStampare; i++) {
   elencoNumeriDaIndovinare.push(generaNumeroRandom(1, 5));
}

document.getElementById("elencoNumeriDom").innerHTML = elencoNumeriDaIndovinare;

setTimeout(verifica,30000);

function verifica() {
   elencoNumeriDom.className = "d-none";
   for (x = 0; x < numeriDaStampare; x++) {
     let numeroPrompt = parseInt(prompt("Quali numeri ricordi?"));
      console.log(numeroPrompt);
      if (elencoNumeriDaIndovinare.includes(numeroPrompt)){
         console.log("bravo");
         elencoNumeriIndovinati.push(numeroPrompt);
      }
   }
   document.getElementById("risultato").innerHTML = `Hai indovinato ${elencoNumeriIndovinati.length} numeri(${elencoNumeriIndovinati})`;
} 


function generaNumeroRandom(min, max) {
   const numeroRandom = Math.floor( Math.random() * (max - min + 1) ) + min;
   return numeroRandom;
}