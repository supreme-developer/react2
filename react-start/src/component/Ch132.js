import React from 'react';

function Ch1321({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    return (
        <div>
            <b
                style={ {
                        color : active ? 'green' : 'black',
                        cursor : 'pointer'    
                    } 
                }
                onClick={() => onToggle(id)}
            >{username}</b> <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button> 
            {/* onRemove(id) 렌더링시 바로 실행되므로 꼭 () => onRemove(id) 
                함수를 만들어서 넣어줘야함.*/}
        </div>
    )
}


function Ch132({Users, onRemove, onToggle}) {
    return (
        <div>
           {
               Users.map (
                   user => <Ch1321 user={user} onRemove={onRemove} onToggle={onToggle} key={user.id}/>
               )
           }     
        </div>
    );
};

export default Ch132;
