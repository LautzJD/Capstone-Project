function Result(location){
    return `
        <li>
            <strong>${location.name}:</strong>
            <p>${location.address}</p>
            <p>${location.connection}</p>
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
    <div id=contrast>
        <ul>
            ${buildResults(state.locations)}
        </ul>
    </div>
    `;
}

