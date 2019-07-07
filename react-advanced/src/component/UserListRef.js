import React from 'react'

function User({user, onRemove, onToggle}) {
    return (
        <div>
            <b
                style={{
                    cursor: 'pointer',
                    color: user.active ? 'green' : 'black'
                }}
                onClick={() => onToggle(user.id)}
            >{user.username}</b> <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div> 
    )
}


function UserListRef({Users, onRemove, onToggle}) {
    return (
        <div>
             {
                 Users.map(user => (
                    <User user={user} onRemove={onRemove} onToggle={onToggle} key={user.id}/>))
             }   
        </div>
    );
}

export default UserListRef;