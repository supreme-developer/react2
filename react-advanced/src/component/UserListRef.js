import React from 'react'

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div> 

    )
}


function UserListRef({Users}) {



    return (
        <div>
             {
                 Users.map(user => (
                    <User user={user} key={user.idx}/>))
             }   
        </div>
    );
}

export default UserListRef;