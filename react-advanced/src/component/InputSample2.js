import React, {useState, useRef} from 'react';

function InputSample2() {

    const [inputs, setInputs] = useState({
        name : '',
        nickname : ''
    });

    const { name, nickname } = inputs;

    const nameInput = useRef();

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

        nameInput.current.focus();
    }

    return (
       <div>
           <input name="name" 
                  placeholder="이름" 
                  onChange={onChanage} 
                  value={name}
                  ref={nameInput}/>
           <input name="nickname" 
                  placeholder="닉네임" 
                  onChange={onChanage} 
                  value={nickname}/>
           <button onClick={onReset}>초기화</button>
           <div>
               <b>값</b>
               {name} : ({nickname})
           </div>
       </div>     
    );
}

export default InputSample2;