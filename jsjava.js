// Esercitazione 11/05/2023

/*
Esercizio 1

let numA = 10;

let numB = 20;

let numC = 35;

let numD = 50;

let numE = 70;

let sum = numA+numB+numC+numD+numE;

console.log(sum)

let med = (numA+numB+numC+numD+numE)/5;

console.log(med);
*/

/*
Esercizio 2

let numA =Number(prompt(`scrivi un numero qualsiasi`));

let numB =Number(prompt(`scrivi un numero qualsiasi`));

let numC =Number(prompt(`scrivi un numero qualsiasi`));

let numD =Number(prompt(`scrivi un numero qualsiasi`));

let numE =Number(prompt(`scrivi un numero qualsiasi`));

let sum= numA+numB+numC+numD+numE;

console.log(sum);

let med = (numA+numB+numC+numD+numE)/5;

console.log(med);
*/

/*
Esercizio 3

let tempBari=30;

let tempNaples=32;

let tempRome=20;

let tempMilan=16;

let piùAlta=Math.max(tempBari,tempNaples,tempMilan,tempRome);

console.log("La temperatura più alta è " + piùAlta);

let piùBassa=Math.min(tempBari,tempNaples,tempMilan,tempRome);

console.log("La temperatura più bassa è " + piùBassa);
*/

/*
Esercizio 4

const corrente=2023;

let nascita=1998;

let età=corrente-nascita;

let manca=100-età;

console.log(`hai ${età} e ti mancano ${manca} al raggiungimento dei 100 anni`);
*/

/*
Esercizio 5

let nome1=prompt();

let nome2=prompt();

let check= nome1===nome2;

console.log(check);
*/

/*
Esercizio 6

let phoneNumber=prompt(`inserisci il numero di telefono`);

let portion=phoneNumber.slice(0,6);

let rimpiazzo=portion.replace(/\d/g, '*')

let cifre=phoneNumber.slice(7,10);

let numeroreale=rimpiazzo+cifre;

console.log(numeroreale);
*/

// Esercitazione 13/05/2023

// Esercizio 1

/*
let voto = parseInt(prompt(`Digita la tua valutazione`))

if (voto<18) {
    alert (`Insufficiente`)
} else if (voto>=18 && voto<21) {
    alert (`Sufficiente`)
} else if (voto>=21 && voto<24) {
    alert (`Buono`)
} else if (voto>=24 && voto<27) {
    alert (`Distinto`)
} else if (voto>=27 && voto<=29) {
    alert (`Ottimo`)
} else if (voto===30) {
    alert (`Eccellente`)
} else {
    alert (`La valutazione non è corretta`)
}
*/

//Esercizio 2

/*
const numero = Number(prompt(`inserisci un numero`));

let tabellina = "questa è la tabellina del " + numero + " ";

for(let i=0; i<=10; i++) {
    console.log(numero * i)
}
*/

//Esercizio 3

/*
const pass = prompt(`Inserire una password`)


if (pass.length >= 6 && pass.length <= 20 && (pass.includes(".") || pass.includes(",") || pass.includes(":") || pass.includes(";") || pass.includes("!") || pass.includes("?"))) {
    console.log(`password accettata`);
} else {
    console.log(`Riprova`);
}
*/

/*
Esercitazione 16/05/2023

Esercizio 1

let numero = parseInt(prompt(`Digita un numero`));

function num(numero) {
    if (numero > 0) {
        console.log(`è un numero positivo`);
    } else if (numero === 0) {
        console.log(`è valore 0`)
    }
     else {
        console.log( `è un numero negativo`);
    }
    return numero;
}

let verifica = num(numero);

console.log(num(numero));
*/

/*
//Esercizio 2

let n = parseInt(prompt(`digita il primo numero`));

let m = parseInt(prompt(`digita il secondo numemro`));

function controllo(n, m) {
    if (n === m) {
        console.log(`TRUE`)
    } else {
        console.log(`FALSE`)
    }
     return (num1, num2);
 }

let verifica = controllo(num1, num2);

 console.log(controllo(n, m));
 */

//Esercizio 3

/*
let frase = prompt(`scrivi ua frase`);

let v_a = 0;
let v_e = 0;
let v_i = 0;
let v_o = 0;
let v_u = 0;
 
let totale = 0;
 
for (let i = 0; i < frase.length; i++) {
 
    let cerca = frase.charAt(i).toLowerCase();
 
    switch (cerca) {
 
        case "a":
            v_a += 1;
            totale += 1;
            break
 
        case "e":
            v_e += 1;
            totale += 1;
            break;
 
        case "i":
            v_i += 1;
            totale += 1;
            break;
 
        case "o":
            v_o += 1;
            totale += 1;
            break;
 
        case "u":
            v_u += 1;
            totale += 1;
            break;
 
    }
 
}
 
console.log(`il totale è ${totale}`)
 
console.log(`le a sono ${v_a}, le e sono ${v_e}, le i sono ${v_i}, le o sono ${v_o}, le u sono ${v_u}`)
*/

//Esercitazione 18/05/2023

//Esercizio 1

/*
const numPar = [2, 4, 6, 8, 10];

const numDis = [1, 3, 5, 7, 9];

const result = [];


function miaFunzione () {
if (numPar.length === numDis.length) {
    for (let i = 0;  i < numPar.length; i++) {
        result.push(numPar[i] + numDis[i]);
    }

    console.log(`il risultato è ${result}`); 
    }   
}

miaFunzione();
*/

//Esercizio 2

/*
let prova = [];

prova.push(prompt(`inserisci un valore`));

let check = prova.includes(prompt(`controlla il valore`));

console.log("la verifica del dato è " + check);
*/

//Esercizio 3

/*
const numbers = [1, -4, 7, 12];

function addPositive(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > 0) {
            sum += numbers[i];
        }
    }
    return sum;
}

let risultato = addPositive(numbers);

console.log(risultato);
*/

// Esercitazione 20/05/2023

// Esercizio 1

/*
let playlist = {
    canzoni: [
  
    ]
}

let canzone1 = {
    titolo: "",
    nomeCantante: "",
    anno: ""
};

let canzone2 = {
    titolo: "",
    nomeCantante: "",
    anno: ""
};

canzone1.titolo = "amore amaro";
canzone1.nomeCantante = "gigi finizio";
canzone1.anno = "2000";

canzone2.titolo = "allenamento 2";
canzone2.nomeCantante = "capo plaza";
canzone2.anno = "2016";

playlist.canzoni.push(canzone1, canzone2);

console.log(playlist);
*/