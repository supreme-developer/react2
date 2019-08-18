import React from 'react';

function Ch06_1({children}) {
    const style = {
        border : '2px solid black',
        padding : 16
    }

    return <div style={style}>{children}</div>
}

export default Ch06_1;