import React from 'react';

function Ch1211({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}


function Ch121({Users}) {
    return (
        <div>
           {
               Users.map (
                   user => <Ch1211 user={user} key={user.id}/>
               )
           }     
        </div>
    );
};

export default Ch121;
