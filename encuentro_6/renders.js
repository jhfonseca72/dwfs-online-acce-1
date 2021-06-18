/**
 * <div class="card">
 *   <h1>xx</h1>
 *   <img src="xx">
 *   <p>xx</p>
 * </div>
 * 
 * @param {*} restaurant 
 * @returns 
 */
function createCard(restaurant) {
    const card = document.createElement("div");
    card.id = restaurant.id;
    card.classList.add("card");

    const h1 = document.createElement("h1");
    h1.textContent = restaurant.name;

    card.appendChild(h1);

    const img = document.createElement("img");
    img.src = restaurant.image_api;

    card.appendChild(img);

    const p = document.createElement("p");
    p.textContent = restaurant.id;

    card.appendChild(p);
    return card;
}

/**
 * 
 * @param {*} restaurants 
 * @param {*} nodeHTML 
 */
function createCards(restaurants, nodeHTML) {
    for (const restaurant of restaurants) {
        const card = createCard(restaurant);
        nodeHTML.appendChild(card);
    }
}

/**
 * <div class="card">
 *   <h1>xx</h1>
 *   <img src="xx">
 *   <p>xx</p>
 * </div>
 * 
 * @param {*} restaurant 
 * @returns 
 */
function createCardWithInnerHTML(restaurant) {
    return `<div class="card">
                <h1>${restaurant.name}</h1>
                <img src="${restaurant.image_api}">
                <p>${restaurant.id}</p>
            </div>`;
}

/**
 * 
 * @param {*} restaurants 
 * @param {*} nodeHTML 
 */
function createCardsWithInnerHTML(restaurants, nodeHTML) {
    let html = "";
    for (const restaurant of restaurants) {
        html += createCardWithInnerHTML(restaurant);
    }
    nodeHTML.innerHTML = html;
}


/**
 * 
 * @param {*} restaurants 
 * @param {*} nodeHTML 
 */
function createCardWithDOMParser(restaurants, nodeHTML) {
    let html = "";
    for (const restaurant of restaurants) {
        html += createCardWithInnerHTML(restaurant);
    }

    const parser = new DOMParser();
    const newDocument = parser.parseFromString(html, "text/html");

    nodeHTML.innerHTML = newDocument.body.innerHTML;
}

/**
 * 
 * @param {*} restaurants 
 * @param {*} nodeHTML 
 */
function createCardsWithFragment(restaurants, nodeHTML) {
    const fragment = document.createDocumentFragment();
    for (const restaurant of restaurants) {
        const card = createCard(restaurant);
        fragment.appendChild(card);
    }
    nodeHTML.appendChild(fragment);
}

/**
 * 
 * @param {*} restaurants 
 * @param {*} nodeHTML 
 */
function createCardsFromTemplate(restaurants, nodeHTML) {
    const fragment = document.createDocumentFragment();
    const template = document.querySelector("#card-template").content;
    for (const restaurant of restaurants) {
        template.querySelector("h1").textContent = restaurant.name;
        template.querySelector("img").src = restaurant.image_api;
        template.querySelector("p").textContent = restaurant.id;
        const clone = template.cloneNode(true);
        fragment.appendChild(clone);
    }
    nodeHTML.appendChild(fragment);
}

export {
    createCard,
    createCards,
    createCardWithInnerHTML,
    createCardsWithInnerHTML,
    createCardsWithFragment,
    createCardsFromTemplate,
    createCardWithDOMParser
}