const menu = document.getElementById("menu");

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



createMenuElements(menu, menuItems);