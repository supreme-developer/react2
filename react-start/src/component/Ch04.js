import React from 'react';
import '../css/Ch04.css'

const name = "ch04예제입니다.";
const stylename = "ch04 style예제입니다.";
const style = {
    backgroundColor : 'black',
    color : 'aqua',
    fontSize: 24,
    padding : '1rem'
};

/* 태그는 꼭 닫혀야한다. */
/* 두개 이상의 태그는 꼭 감싸야한다. */
/* javascript 값을 보여줄때, 중괄호를 사용한다. */
/* 스타일일 경우에는 객체로 넣어야한다. class -> className으로~~ */
/* 주석일경우에는 중괄호, 태그안은 //가능 */

function Ch04() {
    return (
        <>
            {/*주석~~*/}
            <div
                // 주석~~
            >{name}</div>
            <div style={style}>{stylename}</div>
            <div className="gray-box"></div>
        </>     
    );
};

export default Ch04;