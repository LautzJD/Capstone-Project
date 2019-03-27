import Navigation from './src/Navigation';
import Header from './src/Header';
import Content from './src/Content';
import Footer from './src/Footer';
import { camelCase, upperFirst } from 'lodash';
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
            .get(`https://my-json-server.typicode.com/LautzJD/Capstone-Project/cities/${state.cityId}/sports`)
            .then((response) => {
                store.dispatch((previousState) => Object.assign(previousState, { 'sports': response.data }));
            });
    }
}
// /make a fetchteams function that makes an axios call//

function render(state){
    var page = state[state.active];
    var form;
    
    console.log(state);
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
    var destination = upperFirst(camelCase(params.page));

    console.log(destination);

    store.dispatch((state) => Object.assign(state, { 'active': destination }));
}

store.addListener(render);
store.addListener(fetchSports);
//  add a store listner for fetchteams//

router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();

axios
    .get('https://my-json-server.typicode.com/LautzJD/Capstone-Project/cities')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'cities': response.data }));
    });

