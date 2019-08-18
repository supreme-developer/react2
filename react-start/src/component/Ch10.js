import React, { useState, useRef } from 'react';

function Ch09() {
    const [inputs, setInputs] = useState({
        iname : '',
        inickname : ''
    });

    const nameInput = useRef();
    const {iname, inickname} = inputs;

    const onChanage = (e) => {
       const {name, value} = e.target;

       setInputs({
           ...inputs,
           [name] : value
       });
    }

    const onReset = () => {
        setInputs({
            iname : '',
            inickname : '',
        });

        nameInput.current.focus();
    }

    return (
        <div>
           <input name="iname" placeholder="이름" onChange={onChanage} value={iname} ref={nameInput}/>
           <input name="inickname" placeholder="닉네임" onChange={onChanage} value={inickname}/>
           <button onClick={onReset}>초기화</button>     
            <div>
                <b>값 : </b>
                {iname} ({inickname})
            </div>
        </div>
    );
};

export default Ch09;