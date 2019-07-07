import React from 'react'

function User({user, onRemove}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div> 
    )
}


function UserListRef({Users, onRemove}) {
    return (
        <div>
             {
                 Users.map(user => (
                    <User user={user} onRemove={onRemove} key={user.id}/>))
             }   
        </div>
    );
}

export default UserListRef;