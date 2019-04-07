function Option(sport){
    return `<option value="${sport.id}">${sport.name}</option>`;
}

function buildSportOptions(sports){
    // console.log(sports);

    return sports
        .map(Option)
        .join('');
}

export default function Sport(state){
    return `
    <div id=contrast>
    <form method="POST">
        <label for="sport">Select a sport:</label>
        <select id="sportId" name="sport">
            ${buildSportOptions(state.sports)}
        </select>
        <input type="submit" value="submit">
    </form>
    </div>
    `;
}

// export default function Sport(state){
//     return `
//         <a href="page.html"><img src="https://lh3.googleusercontent.com/lNq94URorUpseqYsofayOMLSTBXvWg3hDoxjAMVKpSNz7UD5AuzzZhJ1arKcPVKPJhhBIlh-Pinfas3td-u6yRuf2fgCdTeeynst7Oq4_SJkqouJod4R6rC9-V2aNywdtHfdc76iDi59F0ld84EdmnPqNgBwULuGlQlQQKn5G3s3JTul-yGOMCFf0KY8duzbRy8nXSx2bpiFVxrjKlv15dvgvKUsny-_5dLBy3AmHb-ug-Uj9jYSVq1vVHDH3eoLFA5H4FyYNCYVrWcsldqLNOup2mrUQ3gd29yYwZZ8Wchi9gg9phE16t95rjXp3K9OLtFravkoJ6iGk5_kucsh8x_aPLu0wBUW-hmdFDFbyNGAv4OQ6HTjZ9O5Jwf2gQml4dfN6qduiGEej3nQikmryfyK9-f3CSvNa6ywA_04s87W3Cm31XByDOTyKihOW739r4NoSWr2DERJ0iO6Z8FvNTkF-iHDyDtdc89iNrS7E3JXqPaVA7GqdGoQyHCRs5hfia2fnE9Gz7bQ5gg_VMqyEUREn8r53wlsiEcAjLeEMWG3rYnNe0a8673I-cuyCI62wFgiK0eVCd2COMTBDOHL0zuGJBDfOWaYYEuojZddLqhpTEiyd7ojev0P_4mttPvpOtu6_urmB8dxlzlYyUQx_oCoSja1Swk=s256-no"></a>

//         <a href="page.html"><img src="https://lh3.googleusercontent.com/vy-V-G5o9WdJ3f7w-odKv-DquziUWuSR2Uni51UvP80x-st9utDBFA4qy5emi8znKVy-PzN-L3StrZZ1vm932p_pUogZwNUY6QMCjeyABVDuXINF4Chf1NTLBH_Xyah_Hc69DZwSnKSlGkcWCpaigBxBBilpC0Leqo4hWYMcX_rlxB2XfdwvOjoZij5IwDMNOn8ubkXFB5NC41BytV9lzcX3yMEyAr9SLJOLy408bBczZg2tXlcBSF4oGn2C7TJ1tWxc6BxfZrS2a1ozoMvwioFAiT5keIyo9pnJLXPYFPkmLId_3n6J70GCf-ba5ceyXFciV9CyuZs-iMIsLE9rAO9KcuQJlRo8zjglN5PVUYoX5maDcMhBY5flAaYuj9Kg5tzn-HdHBY0805u4xHOPmfrJyf-FBatRt3WjRuIB1w64D-cpMStHKbmAyEvFclMDbzAZ4erVXKeeKXjFNNdog4nm2epdC_mo1IfkEa_LDUvMp8UE3Bm1fiooIjlw1cWYdTJDaLYWAyKFTsN0m1USgW9Ga-RdPgBBP3WrQUDRBbp2Qp0avm77SJwtpiHvpaRnh7QfnJxTZ-jTYLMQM5OqypAP4NyDK3tXwnxEyY5qpwmXeZoRIcvyeCEDZsups4lSyyOIwGxptu4r6LZWVxaEqvIDeL0wJrc=s256-no"></a>

//         <a href="page.html"><img src="https://lh3.googleusercontent.com/tfzWtrwr3OCl0MeD-zBPi4CA0koAgCswSyYTkM-s-iCXu0PW1DiwhGCHkGWlC6SNvGBi0pWmb9uMFfCLBX3pakachILIX016sQHkYRoks6zncv-gwoy-KTBt0IHDT2EHaTjYfloE_1K6cjF8xa72KWmbb_J_87vc2iVb6qck8GbPWjr8-ExtYFf2_HwAKQDBSlFFRhSrjcMv-x74sV3B7CJ6_o-H2SilOdUXTO2ZJnlF6zJ2Gzk9WwW-QxFlaDlLpJJMHhuYiIMeV3JvWWJ5Fia4eGz_350_7ItSKrOAJhnbS2wO2eXAyn3VaD_coh5gZxCozwZygIfq4u934f-7H-5nMrVR_ze3pstFdSmcGE9Q81uhps5CCbrc9jSK5aQXxWHURrdAbIKrr7cx1NqV-BOpJzIESArT7lKyjCzFYi7C8hLOPb0fKDxTEB7RVP6r7OB3M6tPcvdIgGUAGH2UMr5AvvpPku6q1pqYAU4ytUUBQa8RIX8vNN9g0nJ6RN1yn5pjxaX86uJA5_Jn3BARu7W3lmjvw0IWboI7lxC8SxFSKwahyCIod5YwD-sxy-hdiTL05PcXNsKhAx0z9VTk1d0quJShLuunZkAeTIaaGFTSF-3kHxpFvfnFa8QMobCVb-2X9g5zuhZoq5xQiN2KxDR1BG7w5Wo=s256-no"></a>

//         <a href="page.html"><img src="https://lh3.googleusercontent.com/glUTHX6hANEdN959JWl--r6wum9HB3Z0s60dyRbOVXvavXQrQBacSX3Rah8Bs2BHKO-clKwva6P45T1QO27Sl3OBWFtli2tKiUIqNb-Z-F6qqgv4XKR6TazrQ-xUSlEl5qBHfDzmEzAxprCAcQv-yDm1G0Oz4P6ql0B6K-CMLfqiXlP7VOWGU2Lei8e5dRqnOGbyDOknmjCkJyBnH0ovK85_hzbcH7v1sPyoeih9lVpOTY6_h4sSWUp_m-Wnz7Y-3d5ihFcMaaueBOm06AIy0-w_5nsMN1dND0u3Gbd9UuvPd9o2jwq2u0X_Wq005X1IGhuZoJ91jVHsHpKArcmEdkC72KiqSGonAUazACO5ZsflrNZOlxnFzShKfMeT7bxUR_8Q8V3kQivaJunWsPEP1FUnGT2aFBHHBVHjwvGU4EGJAjlGjc9WTzlQZAlfghWYBMh9_M5oX5zgCvlMltyYDSSuMNFPvrV4_Sdb9-yx63r9W1MXOq1_fMRFBegEn5ctZgwCTkaNJM27xm_vsdGD4kEG_fspAg-BdfqKihBJ_UKR9D0eBylAAHH780TdFzAqfUtwcxAkzBGJk6wk1q004wzQoh7HLAjI1FRLkCAD78AzM4CB0oKPrnSDQYM0MolEyKACUd7B0EE8o8-Q2ycecA0_RgRzunw=s256-no"></a>
//     `;
// }