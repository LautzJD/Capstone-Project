
import { lowerCase } from 'lodash'; // lodash is a library of functions//

function linkBuilder(linksArray){
    var linksHTML = linksArray.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = lowerCase(link);
        }

        return `
        <li>
        <a data-navigo href="./${destination}">${link}</a>
        </li>
        `;
    }).join(' ');

    // console.log(linksHTML);//

    return linksHTML;
}

export default function Navigation(state){
    return `
     <div id = "navigation">

        <ul>
            ${linkBuilder(state)}
        </ul>

    </div>
    `;
}
