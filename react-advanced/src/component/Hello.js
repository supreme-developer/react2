import React from 'react';


// function Hello(props) {
//     return <div style={{color : props.color}}>Hello {props.name}!!</div>
// }

{/* JSX null, false, undefined 아무런 동작을 하지 않음 */}
function Hello({color, name, isSpecial}) {
    return <div style={{color : color}}>
        {/* { isSpecial ? <b>*</b> : null }  */}
        { isSpecial && <b>*</b>}
        Hello {name}!!
        </div>
}

Hello.defaultPrors = {
    name : '이름없음'
}

export default Hello;
