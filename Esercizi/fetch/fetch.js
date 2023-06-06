let prodotti = fetch('https://dummyjson.com/products/1')
    .then(res => res.json())

    .then(json => {
        let carosello = document.getElementById("carouselExample");
        let container = document.getElementById("figlio");

        json.images.forEach(element => {
            // creazione dell'elemento 
            let div = document.createElement("div");
            let img = document.createElement("img");

            img.src = element
            div.classList.add("carousel-item");
            img.classList.add("d-block");
            img.classList.add("w-100")
            div.appendChild(img);

            container.appendChild(div)

        });
    })