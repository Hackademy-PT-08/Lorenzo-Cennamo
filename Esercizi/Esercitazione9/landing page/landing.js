const menu = document.getElementById("menu");
const articlesRow = document.getElementById("articlesRow");

const menuItems = [
    {
        text: "Home",
        url: "#",
        submenu: [],
    },
    , {
        text: "Categories",
        url: "#",
        submenu: [...categories],
    },
    {
        text: "Contact us",
        url: "#",
        submenu: [],
    },
    {
        text: "About",
        url: "#",
        submenu: [],
    },
]

function createMenuElements(target, menuItems) {

    menuItems.forEach((item) => {
        let li = document.createElement("li");
        let anchor = document.createElement("a");

        li.classList.add("nav-item");
        anchor.classList.add("nav-link");

        anchor.setAttribute("href", item.url);

        anchor.innerHTML = item.text;

        li.appendChild(anchor);
        target.appendChild(li);

        if (item.submenu.length > 0) {
            li.classList.add("dropdown");
            anchor.classList.add("dropdown-toggle");
            anchor.setAttribute("data-bs-toggle", "dropdown");

            let dropDiv = document.createElement("div");
            dropDiv.classList.add("dropdown-menu");

            item.submenu.forEach((submenuItem) => {
                let dropAnchor = document.createElement("a");
                dropAnchor.classList.add("dropdown-item");
                dropAnchor.setAttribute("href", submenuItem.url)
                dropAnchor.innerHTML = submenuItem.text;
                dropDiv.appendChild(dropAnchor);
            })

            li.appendChild(dropDiv);
        }
    });

};

function createArticlesCards(target, articles) {

    articles.forEach(article => {
        let cardCol = document.createElement("div");
        cardCol.classList.add("col-12", "col-md-6", "col-lg-4");

        let cardTemplate = `
        <div class="card border-secondary mb-3">
          <div class="card-body">
            <h4 class="card-title">${article.title}</h4>
            <p class="card-text">${article.shortText}</p>
          </div>
          <div class="card-img" style="background-image: url('${article.img}')"></div>
          <!--<img src="${article.img}" class="card-img-top" alt="...">-->
          <div class="card-body">
            ${createBadgeTags(article.tags)}
            <!--<span class="badge bg-primary">Sport</span>
            <span class="badge bg-primary">Serie A</span>
            <span class="badge bg-primary">Campionato</span>-->
          </div>
        </div>
      `;

        cardCol.innerHTML = cardTemplate;
        cardCol.addEventListener("click", () => {
            openCardDetail(article);
        });
        target.appendChild(cardCol);
    });

};


function createBadgeTags(tags) {
    let template = ``;

    tags.forEach(tag => {
        switch (tag) {
            case "Fantasy":
                template += `<span class="badge bg-success me-1">${tag}</span>`;
                break;
            case "SuperHero":
                template += `<span class="badge bg-warning me-1">${tag}</span>`;
                break;
            // SPORT
            default:
                template += `<span class="badge bg-primary me-1">${tag}</span>`;
        }
    });

    return template;
};


function submit(event) {
    event.preventDefault();

    let data = {};

    const emailInput = document.getElementById("email");
    const msgInput = document.getElementById("msg");

    data.email = emailInput.value;
    data["message"] = msgInput.value;

    emailInput.value = "";
    msgInput.value = "";

    console.log(data)

    const confirmModal = new bootstrap.Modal("#confirmModal", {});
    confirmModal.show();
}






//Esegui
createMenuElements(menu, menuItems);
createArticlesCards(articlesRow, articles);