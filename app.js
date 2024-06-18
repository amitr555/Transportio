import HomeScreen from './screens/HomeScreen.js';
import ProductScreen from './screens/ProductScreen.js';
import {parseRequestUrl} from './utilis.js';
import Error404Screen from './screens/Error404Screen.js';
const routes = {
    '/': HomeScreen,
    '/product/:id': ProductScreen,
};
const router=()=>{
    const request = parseRequestUrl();
    const parseUrl =
    (request.resource?`/${request.resource}`:'/')+
    (request.id? '/:id': '')+
    (request.verb ?`/${request.verb}`: ''); 
    const screen = routes[parseUrl]?routes[parseUrl]:Error 404Screen;

    const main = document.getElementById('main-container');
    main.innerHTML=screen.render;
};
window.addEventListener('Load',router);
window.addEventListener('hashchange',router);