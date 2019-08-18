import React from 'react';

function Ch06({color, name, isSpecial}) {
    return (
        <div style={{
            color
        }}>
        {isSpecial && <b>*</b>}
        안녕하세요!!! {name}
        </div>
    );
};

Ch06.defaultProps = {
    name : '이름이 없음'
};

export default Ch06;