import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import { startCase } from 'lodash';
import Store from './state/store';
import Navigo from 'navigo';
import axios from 'axios';

var router = new Navigo(location.origin);
var root = document.querySelector('#root');
var store = new Store();

function render(state){
    var page = state[state.active];

    root.innerHTML = `
    ${Navigation(page)}
    ${Header(page)}
    ${Content(state)}
    ${Footer(page)}
    `;
}

router.updatePageLinks();

function navHandler(params){
    var destination = startCase(params.page);

    store.dispatch((state) => Object.assign(state, { 'active': destination }));
}

store.addListener(render);

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))

    .resolve();

axios
    .get('https://my-json-server.typicode.com/LautzJD/Capstone-Project/cities')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'cities': response.data }));
    });

// For future://
// 4 “selects” on main index.html
// Select city => calls another axios every time
// Uses the ID of the selected option


