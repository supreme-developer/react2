import React, {useState} from 'react';

function InputSample() {

    const [text, setText] = useState('');

    function onChanage(e) {
        setText(e.target.value);
    }

    function onReset(e) {
        setText('');
    }

    return (
       <div>
           <input onChange={onChanage}/>
           <button onClick={onReset}>초기화</button>
           <div>
               <b>값 : {text}</b>
           </div>
       </div>     
    );
}

export default InputSample;