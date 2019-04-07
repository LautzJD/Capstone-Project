export default function SuggestALocation(){
    return `
    
    
    <form method="POST" id="suggestForm" action="https://formspree.io/lautzjd@gmail.com">        
    
    <h1>Suggestion Form</h1>
    <h2>Know of a location or own a bar that proudly represents a non-local team? Let us know!</h2>
        
    <label for="locationName">Location Name</label>
    <input type="text" name="name" id="location" required>

    <label for="city">City</label>
    <input type="text" name="name" id="city" required>

    <label for="state">State</label>
    <input type="text" name="name" id="state" required>

    <label for="email">Email</label>
    <input type="email" name="name" id="email">

    <label for="phone">Phone</label>
    <input type="tel" name="name" id="phone">

    <textarea name="" id="" cols="30" rows="3" placeholder="What non-local team(s) does your business support?"></textarea>

    <input type="submit" value="Submit">

    <input type="reset" value="Clear">

    </form>
    `;
}