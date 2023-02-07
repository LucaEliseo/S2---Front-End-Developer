//Definire tre variabili, rispettivamente con var, let e const, per stampare la stringa di seguito

var nome = 'Aldo';
let cliente = 'cliente';
const number = 3.14;

document.getElementById('concatena').innerHTML = nome + ' , ' + cliente + ' , '  + number;


//Concatenare le variabili precedenti per ottenere lo stesso risultato con un'unica variabile:

var unico = nome + ' , ' + cliente + ' , ' + number;
document.getElementById('concatena2').innerHTML = unico;


//Utilizzare le keyword dichiarative var e let con la stessa variabile, per ottenere i seguenti risultati
var name1 = 'Mario';
let name2 = 'Carla';
document.getElementById('var').innerHTML = name1
document.getElementById('let').innerHTML = name2
document.getElementById('final').innerHTML = name1
document.getElementById('let2').innerHTML = name1
document.getElementById('let3').innerHTML = name2
document.getElementById('final2').innerHTML = name2

//Manipolare il valore di partenza per ottenere i seguenti risultati:

var numero =15;
document.getElementById('iniziale').innerHTML += numero;
document.getElementById('valore1').innerHTML += (numero+numero)+","+(numero+numero+1);;
document.getElementById('valore2').innerHTML += (numero-10)+","+(numero-10-1);;
document.getElementById('valore3').innerHTML +=numero*3;
document.getElementById('valore4').innerHTML +=numero/3;
document.getElementById('valore5').innerHTML +=numero+' '+'è un numero';