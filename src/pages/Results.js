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
        html += '<div id=contrast><h3>Sorry, there are no locations in your selected city that fellow fans call home! Instead, here are some sports bars in your surrounding area!</h3></div>';
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

