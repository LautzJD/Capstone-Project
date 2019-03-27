
import { kebabCase } from 'lodash'; // lodash is a library of functions//

function linkBuilder(linksArray){
    var linksHTML = linksArray.map((link) => {
        var destination = '';

        if(link !== 'Home'){
            destination = kebabCase(link);
        }

        return `
            <a data-navigo href="./${destination}">${link}</a>
        `;
    }).join(' ');

    // console.log(linksHTML);//

    return linksHTML;
}

export default function Navigation(state){
    return `
     <div id = "navigation">
        ${linkBuilder(state.nlinks)}
    </div>
    `;
}
