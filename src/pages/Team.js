function Option(team){
    return `<option value="${team.id}">${team.name}</option>`;
}

function buildTeamOptions(teams){
    // console.log(teams);

    return teams
        .map(Option)
        .join('');
}

export default function Team(state){
    return `
    <div id=contrast>
    <form method="POST">
        <label for="team">Select your team!:</label>
        <select id="teamId" name="team">
            ${buildTeamOptions(state.teams)}
        </select>
        <input type="submit" value="submit">
    </form>
    </div>
    `;
}