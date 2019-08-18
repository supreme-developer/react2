import React, { useState } from 'react';

function Ch09() {
    const [inputs, setInputs] = useState({
        iname : '',
        inickname : ''
    });

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
    }

    return (
        <div>
           <input name="iname" placeholder="이름" onChange={onChanage} value={iname}/>
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