function Option(sport){
    return `<option value="${sport.id}">${sport.name}</option>`;
}

function buildSportOptions(sports){
    console.log(sports);

    return sports
        .map(Option)
        .join('');
}

export default function Sport(state){
    return `
    <form method="POST">
        <label for="sport">Select a sport:</label>
        <select id="sportId" name="sport">
            ${buildSportOptions(state.sports)}
        </select>
        <input type="submit" value="submit">
    </form>
    `;
}

// export default function Sport(state){
//     return `
//     <div id=cardContainer>
//         <div id=football>
//         <h1>football</h1>
//         </div>

//         <div id=baseball>
//         <h1>baseball</h1>
//         </div>

//         <div id=hockey>
//         <h1>hockey</h1>
//         </div>

//         <div id=basketball>
//         <h1>basketball</h1>
//         </div>
    
//     </div>
//     `;
// }