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


function shouldFetchSports(state){
    return state.cityId && !state.sports.length && state.active === 'Sport';
}

function shouldFetch(state){
    if(state.sportId && !state.teams.length && state.active === 'Team'){
        return true;
    }
    if(state.teamId && !state.locations.length && state.active === 'Results'){
        return true;
    }
}
// Refactor if have time//Above function takes to next page when submit pressed//

function fetchSports(state){
    if(shouldFetchSports(state)){
        axios
            .get(`https://my-json-server.typicode.com/LautzJD/Capstone-Project/cities/${state.cityId}/sports`)
            .then((response) => {
                store.dispatch((previousState) => Object.assign(previousState, { 'sports': response.data }));
            });
    }
}

// /make a fetchteams function that makes an axios call//
function fetchTeams(state){
    var shouldFetchTeams = shouldFetch(state);
    
    if(shouldFetchTeams){
        axios
            .get(`https://my-json-server.typicode.com/LautzJD/Capstone-Project/sports/${state.sportId}/teams`)
            .then((response) => {
                console.log(response);
                store.dispatch((previousState) => Object.assign(previousState, { 'teams': response.data }));
            });
    }
}
// make a fetchresults function that makes an axios call //
function fetchResults(state){
    var shouldFetchResults = shouldFetch(state);
    
    if(shouldFetchResults){
        axios
            .get(`https://my-json-server.typicode.com/LautzJD/Capstone-Project/teams/${state.teamId}/locations`)
            .then((response) => {
                console.log(response);
                store.dispatch((previousState) => Object.assign(previousState, { 'locations': response.data }));
                // See bellow for NoResults if statement//
                // if(!response.data.length){
                //     router.navigate('/no-results');
                // }
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
            var selectedValue = event.target.elements[0].value;
            var selectId = event.target.elements[0].id;

            event.preventDefault();

            if(selectId === 'cityId'){
                store.dispatch((previousState) => Object.assign(previousState, { 'cityId': selectedValue, 'sports': [] }));
                router.navigate('/sport');
            }
            
            if(selectId === 'sportId'){
                store.dispatch((previousState) => Object.assign(previousState, { 'sportId': selectedValue, 'teams': [] }));
                router.navigate('/team');
            }

            if(selectId === 'teamId'){
                store.dispatch((previousState) => Object.assign(previousState, { 'teamId': selectedValue, 'results': [] }));
                router.navigate('/results');
            }
        });
    }
}

function navHandler(params){
    var destination = upperFirst(camelCase(params.page));


    store.dispatch((state) => Object.assign(state, { 'active': destination }));
}

store.addListener(render);
store.addListener(fetchSports);
store.addListener(fetchTeams);
store.addListener(fetchResults);


router
    .on('/:page', navHandler)
    .on('/', () => navHandler({ 'page': 'Home' }))
    .resolve();

axios
    .get('https://my-json-server.typicode.com/LautzJD/Capstone-Project/cities')
    .then((response) => {
        store.dispatch((state) => Object.assign(state, { 'cities': response.data }));
    });