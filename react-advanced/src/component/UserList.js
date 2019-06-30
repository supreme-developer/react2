import React from 'react';

function User({user}) {
    return (
        <div>
            <b>{user.username}</b> <span>({user.email})</span>
        </div>  
    );
}

function UserList() {
    const users = [
        {
            id : 1,
            username : 'hong',
            email : 'ggg@naver.com'
        },
        {
            id : 2,
            username : 'kim',
            email : 'kkk@naver.com'
        },
        {
            id : 3,
            username : 'lee',
            email : 'lll@naver.com'
        }
    ];

    return (
        <div>
            {/* <User user={users[0]} />
            <User user={users[1]} />
            <User user={users[2]} /> */}
            {users.map(user => (
                <User user={user} key={user.id} />
            ))}
        </div>
    )
}

export default UserList;