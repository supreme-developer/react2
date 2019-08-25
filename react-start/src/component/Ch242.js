import React, { useContext } from 'react';
import { UserDispatch } from './Ch24'

// props만 변경될 경우만(input값만 바뀔때에는 상관없음)
const Ch2421 = React.memo(function Ch1921({ user }) {
    const {username, email, id, active} = user;

    const dispatch = useContext(UserDispatch);

    return (
        <div>
            <b
                style={ {
                        color : active ? 'green' : 'black',
                        cursor : 'pointer'    
                    } 
                }
                onClick={() => dispatch({
                    type : 'TOGGLE_USER',
                    id
                })}
            >{username}</b> <span>{email}</span>
            <button onClick={() => dispatch({
                type : 'REMOVE_USER',
                id
            })}>삭제</button> 
            {/* onRemove(id) 렌더링시 바로 실행되므로 꼭 () => onRemove(id) 
                함수를 만들어서 넣어줘야함.*/}
        </div>
    )
});


function Ch242({Users, onRemove, onToggle}) {
    return (
        <div>
           {
               Users.map (
                   user => <Ch2421 user={user} key={user.id}/>
               )
           }     
        </div>
    );
};

export default React.memo(Ch242);
