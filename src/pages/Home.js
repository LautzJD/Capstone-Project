function City(city){
    return `<option value="${city.id}">${city.name}</option>`;
}

function buildCityOptions(cities){
    return cities
        .map(City)
        .join('');
}

export default function Home(state){
    return `
    <div id=contrast>
    <h2>Looking for a place to watch the game?</h2>
    <h3>Find fans of your favorite sports team in other cities!</h3>

    <form method="POST">
        <label for="city">Select a major city:</label>
        <select id="cityId" name="city">
            ${buildCityOptions(state.cities)}
        </select>
        <input type="submit" value="submit">
    </form>
    </div>
    `;
}