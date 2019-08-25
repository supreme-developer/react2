import React, { createContext, useContext, useState } from 'react';

// function Child({ text }) {
//     return <div>안녕하세요 {text}</div>
// }

// function Parent({ text }) {
//     return <Child text={text} />
// }

// function GrandParent({ text }) {
//     return <Parent text={text} />
// }

// function ContextSample({ text }) {
//     return <GrandParent text="GOOD" />
// }

const MyContext = createContext('defaultValue');

function Child() {
    const text = useContext(MyContext);
    return <div>안녕하세요 {text}</div>
}

function Parent() {
    return <Child />
}

function GrandParent() {
    return <Parent />
}

function ContextSample() {
    const [value, setValue] = useState(true);

    return (
        <MyContext.Provider value={value ? 'GOOD' : 'BAD'}>
            <GrandParent/>
            <button onClick={() => setValue(!value)}>CLICK ME</button>
        </MyContext.Provider>
    )
}

export default ContextSample;