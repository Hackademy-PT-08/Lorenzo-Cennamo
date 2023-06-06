// let API = "a00f5eaa" mia chiave che non funziona (ho eseguito tutti i passaggi corretti)
let API = "e1473b8d" //chiave di fedinando
let url = `http://www.omdbapi.com/?apikey=${API}&s=`
let mioInput = document.getElementById("mioInput");
let mioButton = document.getElementById("mioButton");
let cards = document.getElementById("cards");

function checkInput() {
    let lunghezza = mioInput.value

    if (lunghezza.length < 3) {
      return alert(`riprova`)
    }
    fetch(`${url}${mioInput.value}`)
        .then(risposta => risposta.json())
        .then(oggetto => console.log(oggetto))
        .catch(new Error)


    console.log(`${url}${mioInput.value}`)
};


mioButton.addEventListener(`click`, checkInput);