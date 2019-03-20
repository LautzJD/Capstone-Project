import * as Pages from './pages';

export default function Content(state){
    return `
<div id="content">
<div>
    ${Pages[state.body]()}

</div>
</div>
`;
}