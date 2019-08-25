import React, {useRef, useMemo, useCallback, useReducer} from 'react';
import Ch191 from './Ch191';
import Ch192 from './Ch192';
import Ch221 from './Ch221';

function countActiveUser(users) {
    console.log('활성 사용자 수를 세는중');
    return users.filter(user => user.active).length;
}

const initializeState = {
    users : [
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
    ]
};

function reducer(state, action) {
    switch(action.type) {
        case 'CREATE_USER':
            return {
                inputs : initializeState.inputs,
                users : state.users.concat(action.user)
            }
        case 'TOGGLE_USER':
            return {
                ...state,
                users : state.users.map(user => 
                    user.id === action.id ?
                    { ...user, active : !user.active} : user
                )
            }
        case 'REMOVE_USER':
            return {
                ...state,
                users : state.users.filter(user =>
                    user.id !== action.id)
            }           
        default:
            throw new Error('Unhandled action');
    }
};

function Ch22() {
    const [state, dispatch] = useReducer(reducer, initializeState);
    const [form, onChange, reset] = Ch221({
        username : '',
        email : ''
    });
    const {username, email} = form;
    const nextId = useRef(4);    
    const {users} = state;

    const onCreate = useCallback(() => {
        dispatch({
            type : 'CREATE_USER',
            user : {
                id : nextId.current,
                username,
                email
            }
        });    
        nextId.current += 1;
        reset();
    }, [username, email, reset]);
    // ESLint 규칙상 custom hook 반환한것이므로 reset로 dept에 넣어야한다.

    const onToggle = useCallback(id => {
        dispatch({
            type : 'TOGGLE_USER',
            id
        });
    }, []);

    const onRemove = useCallback(id => {
        dispatch({
            type : 'REMOVE_USER',
            id
        });
    }, []);

    const count = useMemo(() => countActiveUser(users), [users]);

    return (
        <>
            <Ch191 
                username={username} 
                email={email} 
                onChange={onChange}
                onCreate={onCreate}
            />
            <Ch192 Users={users} onToggle={onToggle} onRemove={onRemove}/>
            <div>활성 사용자 수 : {count}}</div>
        </>
    );
};

export default Ch22;

