// Scrivi una funzione per capire se la parola è palindroma
var parola = prompt('Inserisci qui una parola');
var arrayParola = [ ];
var paroleReverse = [ ];


if (isPalindromo(parola) == true) {
  console.log('palindromo');
} else {
  console.log('non è palindromo');
}


function isPalindromo(parola) {
  for (var i = 0; i < parola.length; i++) {
    arrayParola.push(parola[i])
    console.log(arrayParola);
  }
  for (var i = parola.length - 1; i >= 0; i--) {
    paroleReverse.push(parola[i])
    console.log(paroleReverse);
  }
  for (var i = 0; i < arrayParola.length; i++) {
    if (arrayParola[i] == paroleReverse[i]) {
      return true;
    }
    else {
      return false;
    }
  }
}
