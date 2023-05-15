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