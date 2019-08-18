import React from 'react';

function Ch05_1({children}) {
    const style = {
        border : '2px solid black',
        padding : 16
    }

    return <div style={style}>{children}</div>
}

export default Ch05_1;