function Result(location){
    return `

        <li>
            <strong>${location.name}:</strong>
            <p>${location.address}</p>
        </li>
    `;
}

function buildResults(locations){
    return locations
        .map(Result)
        .join('');
}


export default function Results(state){
    let html = '';

    if(state.Results.yelp){
        html += '<h1>Yelp Results</h1>';
    }
    html += `
    <div id=contrast>
        <ul>
            ${buildResults(state.locations)}
        </ul>
    </div>
    `;

    return html;
}

