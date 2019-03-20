export default function Home(){
    return `
    <h2>Looking for a place to watch the game?</h2>
    <h3>Find fans of your favorite sports team in other cities!</h3>

    <form method="POST">
        <label for="city">Select a major city:</label>
        <select id="city" name="city">
        </select>
        <input type="submit" value="submit">
    </form>
    `;
}