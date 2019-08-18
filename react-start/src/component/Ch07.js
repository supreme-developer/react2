import React, { useState } from 'react'

function Ch07() {
    const [number, setNumber] = useState(0);
    const OnIncrease = () => {
        //setNumber(number + 1);
        setNumber(prevNumber => prevNumber + 1);
    };
    
    const OnDecrease = () => {
        //setNumber(number - 1);
        setNumber(prevNumber => prevNumber + 1);
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={OnIncrease}>+1</button>
            <button onClick={OnDecrease}>-1</button>
        </div> 
    );
};

export default Ch07;