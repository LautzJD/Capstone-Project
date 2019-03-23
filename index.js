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


function shouldFetch(state){
    return state.cityId && !state.sports.length && state.active === 'Sport';
}

function fetchSports(state){
    var shouldFetchSports = shouldFetch(state);
    
    if(shouldFetchSports){
        axios
            .get(`https://my-json-server.typicode.com/LautzJD/Capstone-Project/sports?cityId=${state.cityId}`)
            .then((response) => {
                store.dispatch((previousState) => Object.assign(previousState, { 'sports': response.data }));
            });
    }
}

function render(state){
    var page = state[state.active];
    var form;

    root.innerHTML = `
        ${Navigation(page)}
        ${Header(page)}
        ${Content(state)}
        ${Footer(page)}
    `;

    router.updatePageLinks();

    form = document.querySelector('form');

    if(form){
        form.addEventListener('submit', (event) => {
            var cityId = event.target.elements[0].value;

            event.preventDefault();

            store.dispatch((previousState) => Object.assign(previousState, { 'cityId': cityId, 'sports': [] }));

            router.navigate('/sport');
        });
    }
}

function navHandler(params){
    var destination = startCase(params.page);

    store.dispatch((state) => Object.assign(state, { 'active': destination }));
}

store.addListener(render);
store.addListener(fetchSports);

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


