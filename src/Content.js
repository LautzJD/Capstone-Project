import * as Pages from './pages';

export default function Content(state){
    var page = state[state.active];

    
    return `
        <div id="content">
            <div>
                ${Pages[page.body](state)}  
            </div>
        </div>
    `;
}