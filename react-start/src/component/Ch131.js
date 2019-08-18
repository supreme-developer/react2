import React from 'react';

function Ch131({username, email, onChanage, onCreate }) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChanage}
                value={username}
            />    
            <input
                name="email"
                placeholder="이메일"
                onChange={onChanage}
                value={email}
            /> 
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default Ch131;