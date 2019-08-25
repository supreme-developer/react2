import React from 'react';

function Ch191({username, email, onChange, onCreate }) {
    return (
        <div>
            <input
                name="username"
                placeholder="계정명"
                onChange={onChange}
                value={username}
            />    
            <input
                name="email"
                placeholder="이메일"
                onChange={onChange}
                value={email}
            /> 
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

export default React.memo(Ch191);
// props가 변경될 경우만 수행