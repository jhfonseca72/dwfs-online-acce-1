//TODO: Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
import data from './data.js';
import createCard from './renders.js';

/*
    <div class="card">
        <h1 id="title">Hola DOM</h1>
        <img id="image">
        <p id="id"></p>
    </div>
    */


(function () {
    /*const title = document.getElementById("title");
    title.classList.add(data[0].classes);
    title.textContent = data[0].name;

    const image = document.getElementById("image");
    image.src = data[0].image_api;

    const id = document.getElementById("id");
    id.textContent = data[0].id;

    console.log(title);*/

    for (const restaurant of data) {
        console.log(restaurant)
        const card = createCard(restaurant);
        const restaurants = document.getElementById("restaurants");
        restaurants.appendChild(card);
    }

    /*let html = "";
    for (const restaurant of data) {
        html = html + `<div class="card">
                            <h1>${restaurant.name}</h1>
                            <img src="${restaurant.image_api}">
                            <p>${restaurant.id}</p>
                        </div>`
    }
    const restaurants = document.getElementById("restaurants");
    restaurants.innerHTML = html;*/
})();
