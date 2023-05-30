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

//Esercizio 4

/*
const prodotti = ["Smartphone", "Auricolari", "Bluetooth", "Motorino", "Auto", "T-shirt", "Felpa con cappuccio", "Nano da giardino", "Videogioco Super Nintendo"];


function find(prodotti) {
    for(let i=0; i<prodotti.length; i++) {
        if(prodotti[i].toLowerCase() === prodotti.toLowerCase()) {
            return `trovato!`;
        } 
    };
    return `non trovato!`;
}

let result = "";

do {
    let sceltaUtente = prompt(`quale prodotto cerchi?`);
    result = find(sceltaUtente);
    console.log(result);
} while (result === `non trovato!`);
*/

//Esercizio 6

/*
let frase = `Ciao sono un esercizio sui metodi degli array`

function checkFirstLetters(testo) {
    let nuovoArray = [];
    const togliSpazi = testo.split(" ");
    for(let i=0; i < togliSpazi.length; i++) {
        nuovoArray.push(togliSpazi[i].charAt(0))
    }
    let fraseFinale = nuovoArray.join("");
    return fraseFinale;
}
console.log(checkFirstLetters(frase));
*/

//Esercitazione 19/05/2023

//Esercizio 1

/*
let playlist = {
    canzoni: [
        {
            titolo: "",
            autore: "",
            anno: ""
        },
        {
            titolo: "",
            autore: "",
            anno: "",
        },
    ],
    aggiungi: function(titolo, autore, anno, index) {
        this.canzoni[index].titolo = titolo;
        this.canzoni[index].autore = autore;
        this.canzoni[index].anno = anno;
    }
}

playlist.aggiungi("Con calma", "Daddy Yankee", "2020", 0);
playlist.aggiungi("Narcos", "Geolier", "2023", 1);

playlist.canzoni.forEach(canzone => {
    console.log(`Titolo: ${canzone.titolo}, Autore: ${canzone.autore}, Anno: ${canzone.anno}`);
});
*/

//Esercizio 2

/*
let rubrica = {
    utenti: [
        utente1 = {
            nome: "angelo",
            cognome: "spinillo",
            telefono: "43167589486",
            indirizzo: {
                via: "via scarlatta",
                citta: "Napoli",
                provincia: "NA"
            }
        },
        utente2 = {
            nome: "pierpaolo",
            cognome: "vattelapesca",
            telefono: "34056791864",
            indirizzo: {
                via: "via delle pigne",
                citta: "Milano",
                provincia: "MI"
            }
        },
        utente3 = {
            nome: "davide",
            cognome: "ambrosini",
            telefono: "4978512654",
            indirizzo: {
                via: "via epomeo",
                citta: "Roma",
                provincia: "RM"
            }
        },
        utente4 = {
            nome: "mario",
            cognome: "rossi",
            telefono: "6789451234",
            indirizzo: {
                via: "via fasulla 123",
                citta: "Springfield",
                provincia: "SP"
            }
        }
    ],
    informazioniUtente: function () {
        rubrica.utenti.forEach(contatto => {
            console.log(`Nome: ${contatto.nome}, Cognome: ${contatto.cognome}, Telefono: ${contatto.telefono}`)
        });
    }
};

// rubrica.informazioniUtente();

rubrica.utenti.pop();

rubrica.informazioniUtente();

let nomiRubrica = (rubrica) =>  {
    console.log(`Gli utenti della rubrica sono:`)
    rubrica.forEach(utente => {
        console.log(`${utente.nome}`)
    })
}

nomiRubrica(rubrica.utenti);
*/

//Esercizio 3

/*
let garage = {
    auto: [
        {
            nome: "qashqai",
            marca: "nissan"
        },
        {
            nome: "model x",
            marca: "tesla"
        },
        {
            nome: "ID. 4",
            marca: "volkswagen"
        },
        {
            nome: "spring",
            marca: "dacia"
        }
    ],
    infoVeicoli: function()  {
        this.auto.forEach(vettura => {
            console.log(` ${vettura.marca} - ${vettura.nome} `)
        })
    }
}

garage.infoVeicoli();

let macchine = (garage) => {
    console.log(`i modelli sono:\n`);
    garage.forEach(pippo => {
        console.log(`${pippo.nome}`);
    })
}

macchine(garage.auto);
*/

//Esercizio 4

/*
const libri = [
    {
        titolo: "Harry Potter",
        autore: "Rowling",
        categoria: "fantasy",
    },
    {
        titolo: "Il piccolo principe",
        autore: "Exuperie",
        categoria: "narrativa classica"
    },
    {
        titolo: "Il Signore degli Anelli",
        autore: "Tolkien",
        categoria: "fantasy"
    },
    {
        titolo: "Le avventure di Tom Sawyer",
        autore: "Mark",
        categoria: "narrativa classica"
    },
    {
        titolo: "Percy Jackson e il ladro di fulmini",
        autore: "Rick",
        categoria: "fantasy"
    }
];

let ricerca = prompt(`inserisci una categoria tra: "fantasy" e "narrativa classica"`);

function cercaLibro(keyWord) {
    let result = libri.filter(libro => libro.categoria.toLowerCase().includes(keyWord.toLowerCase()));
    if (result.length === 0) {
        console.log(`Non ho trovato nessun libro che abbia quel genere`);
    }
    result.forEach(book => {
        console.log(`<a href="www.lamiasuperlibreria.aulab/${book.autore.toLowerCase()}/${book.titolo.toLowerCase().replace(/ /g, "-")}.html">${book.titolo.toLowerCase().replace(/ /g, "-")}</a>`);
    })
};

console.log(cercaLibro(ricerca));
*/

//Esercitazione 23/05/2023

//Esercizio1

/*
const library = [ 
    {
        title: 'Bill Gates',
        author: 'The Road Ahead',
        readingStatus: true
    },
    {
        title: 'Steve Jobs',
        author: 'Walter Isaacson',
        readingStatus: true
    },
    {
        title: 'Mockingjay: The Final Book of The Hunger Games',
        author: 'Suzanne Collins',
        readingStatus: false
    }
];



function letto(libreria) {
    libreria.forEach(book => {
        if(book.readingStatus === true) {
            console.log(`il libro ${book.title} di ${book.author} è stato letto`)
            return;
        } 
        console.log(`il libro ${book.title} di ${book.author} non è stato letto`)
    })
}

letto(library);
*/

//Esercizio 2

/*
const bowling = {
    players: [
        { name: "Andrea", scores: [10, 7, 9, 7, 6, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 8, 10] },
        { name: "Marco", scores: [9, 8, 10, 10, 7, 10, 10, 10, 9, 10, 8, 7, 10, 10, 10, 9, 10] },
        { name: "Davide", scores: [10, 10, 7, 8, 10, 7, 9, 8, 10, 10, 10, 9, 8, 10, 10, 10, 7] }
    ]
};

function playerTotals(bowling) {
    let giocatori = bowling.players;
    giocatori.forEach(giocatore => {
        let punti = giocatore.scores;
        let contatore = 0;
        punti.forEach(punto => {
            contatore += parseInt(punto)
        })
        console.log(contatore);
        giocatore.total = contatore;
    });
}

function checkWinner(bowling) {
    let giocatori = bowling.players;
    let totale = giocatori.map(player => player.total);
    let punteggioAlto = Math.max(...totale)
    console.log(punteggioAlto)
    giocatori.forEach(giocatore => {
        if (giocatore.total === punteggioAlto) {
            console.log(`Nome: ${giocatore.name}, punteggio: ${giocatore.scores}, totale: ${giocatore.total}`)
        }
    })
}

playerTotals(bowling)
checkWinner(bowling)
*/

//Esercizio 3

/*
let calendario = {
    lunedi: [],
    martedi: [],
    mercoledi: [],
    giovedi: [],
    venerdi: [],
    sabato: [],
    domenica: []
}

class Evento {
    constructor(nomeEvento, inizioEvento) {
        this.nomeEvento = nomeEvento;
        this.inizioEvento = inizioEvento;
    }
}

function inserisci (evento, giorno) {
    calendario[giorno].push(evento);
}

function orderAppointments (calendario, giorno) {
    calendario[giorno].sort(function(a, b){
            return a["inizioEvento"].replace(/:/g, '') - b["inizioEvento"].replace(/:/g, '');
          });
    console.log(calendario)
    
}

function cercaAppuntamenti(giorno) {
    calendario[giorno].forEach(appuntamento => {
        console.log(appuntamento)
    });
}

let evento1 = new Evento("lezione aulab", "ore 18.30");
let evento3 = new Evento("lezione aulab", "ore 18.30");
let evento5 = new Evento("lezione aulab", "ore 18.30");
let evento2= new Evento("esercitazione aulab", "ore 19");
let evento4= new Evento("esercitazione aulab", "ore 19");

inserisci(evento1, "lunedi");
inserisci(evento3, "mercoledi");
inserisci(evento5, "venerdi");
inserisci(evento2, "martedi");
inserisci(evento4, "giovedi"); 

orderAppointments(calendario, "lunedi");

let cerca = "lunedi";

let giorni = Object.keys(calendario);

let giornoTrovato = giorni.filter(giorno => giorno === cerca);

console.log(giornoTrovato)

cercaAppuntamenti(giornoTrovato);
/*