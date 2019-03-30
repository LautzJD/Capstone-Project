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
    return `
        <ul>
            ${buildResults(state.locations)}
        </ul>
    `;
}

