export default function SuggestALocation(){
    return `
    <h1>Suggestion Page</h1>
    <h2>Know of a location or own a bar that proudly represents a non-local team? Let us know!</h2>
    
    <div id="suggestForm">

    <form action="https://formspree.io/lautzjd@gmail.com" method="POST">
        <label for="locationName">Location Name</label>
        <input type="text" name="location" id="location" required>

        <label for="city">City</label>
        <input type="text" name="city" id="city" required>

        <label for="email">Email</label>
        <input type="email" name="email" id="email">

        <label for="phone">Phone</label>
        <input type="tel" name="phone" id="phone">

        <textarea name="msg" id="" cols="30" rows="3" placeholder="Please enter your message here"></textarea>

        <input type="submit" value="submit">

        <input type="reset" value="clear">

    </form>

</div>

    `;
}