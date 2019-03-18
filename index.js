import axios from 'axios';

axios
.get('https://my-json-server.typicode.com/LautzJD/Capstone-Project/cities')
.then((response) => {
    var citySelect = document.getElementById("city");
    response.data.forEach(element => {
        console.log(`<option value="${element.id}">${element.name}</option>`);
        citySelect.insertAdjacentHTML('beforeend', `<option value="${element.id}">${element.name}</option>`);
    });
    console.log(citySelect);

});
//For future://
// 4 “selects” on main index.html
// Select city => calls another axios every time 
// Uses the ID of the selected option 
