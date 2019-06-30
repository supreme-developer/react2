import React, {useState} from 'react';

function InputSample1() {

    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const { name, nickname } = inputs;

    function onChanage(e) {
        const { value, name } = e.target;

        setInputs( {
            ...inputs,
            [name] : value    
        });
    }

    function onReset(e) {
        setInputs({
            name : '',
            nickname : ''
        });
    }

    return (
       <div>
           <input name="name" placeholder="이름" onChange={onChanage} value={name}/>
           <input name="nickname" placeholder="닉네임" onChange={onChanage} value={nickname}/>
           <button onClick={onReset}>초기화</button>
           <div>
               <b>값</b>
               {name} : ({nickname})
           </div>
       </div>     
    );
}

export default InputSample1;