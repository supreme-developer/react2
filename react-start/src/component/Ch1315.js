import React, {useRef, useState} from 'react';
import Ch131 from './Ch131';
import Ch132 from './Ch132';

function Ch1315() {
    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    });

    const {username, email} = inputs;
    const onChange = e => {
        const {name, value} = e.target;

        setInputs({
           ...inputs,
           [name]:value    
        });
    };


    const [Users, setUsers] = useState([
        {
            id : 1,
            username : 'aaa',
            email : 'aaa@naver.com',
            active : true
        },
        {
            id : 2,
            username : 'bbb',
            email : 'bbb@naver.com',
            active : false
        },
        {
            id : 3,
            username : 'ccc',
            email : 'ccc@naver.com',
            active : false
        }
    ]);

    const nextId = useRef(4); // useState로 하면 reRendering되므로 useRef로 하는게 효율적

    const onCreate = () => {
        const User = {
            id : nextId.current,
            username, 
            email
        };
        
        //setUsers([...Users, User]); // spread 배열연산
        setUsers(Users.concat(User));
        setInputs({
            username: '',
            email: ''
            
        });

        console.log(nextId.current); // 4
        nextId.current += 1;
    };

    const onRemove = (id) => {
        setUsers(Users.filter(user => user.id !== id));

    };

    const onToggle = (id) => {
        setUsers(Users.map(
            user => user.id === id ?
            {...user, active: !user.active} :
            user
        ));

    };

    return (
        <>
            <Ch131 
                username={username}
                email={email}
                onChanage={onChange}
                onCreate={onCreate}
            />
            <Ch132 Users={Users} onRemove={onRemove} onToggle={onToggle}/>
        </>
    );
};

export default Ch1315;

