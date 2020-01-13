
var sceltaUtente = prompt('pari o dispari?');
var numeroUtente = parseInt(prompt('inserisci un numero pari o dispari'));
console.log(numeroUtente);
var numeroPC = random(0,5)
console.log(numeroPC);
var risultato = pariDispari(numeroUtente, numeroPC);
console.log(risultato);

if (risultato == true) {
  console.log('ha vinto pari');
} else {
  console.log('ha vinto dispari');
}

function pariDispari(numeroUtente, numeroPC) {
  var somma = numeroUtente + numeroPC;
  if (somma % 2 == 0) {
    return true;
  } else {
    return false;
  }
}


function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  var random = Math.floor(Math.random() * (max - min + 1)) + min;
  return random;
}
