import React, {  useState } from 'react';

function Ch08() {
    const [text, setText] = useState('');
    const onChanage = (e) => {
        setText(e.target.value);
    }

    const onReset = () => {
        setText('');
    }

    return (
        <div>
           <input onChange={onChanage} value={text}/>
           <button onClick={onReset}>초기화</button>     
            <div>
                <b>값 : </b>
                {text}
            </div>
        </div>
    );
};

export default Ch08;