import React, {useRef, useState, useMemo} from 'react';
import Ch161 from './Ch161';
import Ch162 from './Ch162';

function Ch17() {
    const [inputs, setInputs] = useState({
        username : '',
        email : ''
    });

    function countActiveUser(users) {
        console.log('활성 사용자 수를 세는중');
        return users.filter(user => user.active).length;
    }

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

    const count = useMemo(() => countActiveUser(Users), [Users]);
    // Users사 변경될 경우만 호출(input만 변경될 경우에는 호출되지 않고 그전 값을 리턴해줌)
    return (
        <>
            <Ch161 
                username={username}
                email={email}
                onChanage={onChange}
                onCreate={onCreate}
            />
            <Ch162 Users={Users} onRemove={onRemove} onToggle={onToggle}/>
            <div>{count}</div>
        </>
    );
};

export default Ch17;

