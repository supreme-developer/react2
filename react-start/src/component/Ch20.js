import React, { useReducer } from 'react'

function reducer(state, action) {
    switch(action.type) {
        case 'INCREMENT':
            return state+1;
        case 'DECREMENT':
            return state-1;
        default:
            throw new Error('Unhandled action');        
    }

    return state;
};

function Ch20() {
    const [number, dispatch] = useReducer(reducer, 0);

    const OnIncrease = () => {
        //setNumber(number + 1);
        dispatch({
            type : 'INCREMENT'
        })
    };
    
    const OnDecrease = () => {
        //setNumber(number - 1);
        dispatch({
            type : 'DECREMENT'
        })
    };

    return (
        <div>
            <h1>{number}</h1>
            <button onClick={OnIncrease}>+1</button>
            <button onClick={OnDecrease}>-1</button>
        </div> 
    );
};

export default Ch20;