import React from 'react';

// props만 변경될 경우만(input값만 바뀔때에는 상관없음)
const Ch1921 = React.memo(function Ch1921({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    return (
        <div>
            <b
                style={ {
                        color : active ? 'green' : 'black',
                        cursor : 'pointer'    
                    } 
                }
                onClick={() => onToggle(id)}
            >{username}</b> <span>{email}</span>
            <button onClick={() => onRemove(id)}>삭제</button> 
            {/* onRemove(id) 렌더링시 바로 실행되므로 꼭 () => onRemove(id) 
                함수를 만들어서 넣어줘야함.*/}
        </div>
    )
});


function Ch192({Users, onRemove, onToggle}) {
    return (
        <div>
           {
               Users.map (
                   user => <Ch1921 user={user} onRemove={onRemove} onToggle={onToggle} key={user.id}/>
               )
           }     
        </div>
    );
};

export default React.memo(Ch192);
