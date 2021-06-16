function createCard(restaurant) {
    const card = document.createElement("div");
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

export default createCard;