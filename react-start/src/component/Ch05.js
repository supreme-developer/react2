import React from 'react';

function Ch05({color, name}) {
    return (
        <div style={{color : color}}>안녕하세요!!! {name}</div>
    );
};

Ch05.defaultProps = {
    name : '이름이 없음'
};

export default Ch05;