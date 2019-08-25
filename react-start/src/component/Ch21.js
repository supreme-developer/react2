import React, {useRef, useMemo, useCallback, useReducer} from 'react';
import Ch191 from './Ch191';
import Ch192 from './Ch192';

function countActiveUser(users) {
    console.log('활성 사용자 수를 세는중');
    return users.filter(user => user.active).length;
}

const initializeState = {
    inputs : {
        username : '',
        email : ''
    },
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
        case 'CHANGE_INPUT':
            return {
                ...state,
                inputs : {
                    ...state.inputs,
                    [action.name] : action.value
                }
            };
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

function Ch21() {
    const [state, dispatch] = useReducer(reducer, initializeState);
    const nextId = useRef(4);    
    const {users} = state;
    const {username, email} = state.inputs;

    const onChange = useCallback(e => {
        const {name, value} = e.target;
        dispatch({
            type : 'CHANGE_INPUT',
            name,
            value
        });
    }, []);

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
    }, [username, email]);

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

export default Ch21;

