import React from 'react';

function Ch111({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>{user.email}</span>
        </div>
    )
}


function Ch11() {
    const Users = [
        {
            id : 1,
            username : 'aaa',
            email : 'aaa@naver.com'
        },
        {
            id : 2,
            username : 'bbb',
            email : 'bbb@naver.com'
        },
        {
            id : 3,
            username : 'ccc',
            email : 'ccc@naver.com'
        }
    ];

    return (
        <div>
           {
               Users.map (
                   user => <Ch111 user={user} key={user.id}/>
               )
           }     
        </div>
    );
};

export default Ch11;
