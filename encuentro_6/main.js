//TODO: Modules: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules
import data from './data.js';
import {
    createCards,
    createCardsFromTemplate,
    createCardsWithFragment,
    createCardsWithInnerHTML,
    createCardWithDOMParser
} from './renders.js';

(function () {
    /**----------- Using createElement ------------*/
    //createCards(data, document.querySelector(".restaurants"));

    /*------------ Using innerHTML -----------*/
    //document.querySelector(".restaurants").innerHTML = "";
    //createCardsWithInnerHTML(data, document.querySelector(".restaurants"));

    /*------------ Using DOMParser -----------*/
    //document.querySelector(".restaurants").innerHTML = "";
    //createCardWithDOMParser(data, document.querySelector(".restaurants"));

    /*------------ Using Fragments -----------*/
    //document.querySelector(".restaurants").innerHTML = "";
    //createCardsWithFragment(data, document.querySelector(".restaurants"));

    /*------------ Using Template -----------*/
    //document.querySelector(".restaurants").innerHTML = "";
    //createCardsFromTemplate(data, document.querySelector(".restaurants"));
})();
