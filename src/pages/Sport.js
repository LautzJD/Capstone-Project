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