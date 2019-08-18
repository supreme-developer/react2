import React, { useEffect } from 'react';

function Ch1621({user, onRemove, onToggle}) {
    const {username, email, id, active} = user;
    // useEffect(() => {
    //     console.log('컴포넌트가 화면에 나타남');
    //     // props -> state
    //     // REST API
    //     // D3, Video.js
    //     // setInterval, setTimeout
    //     // UI가 나타난 상태이므로 DOM 접근가능
    //     return(() =>
    //         // clearInterval, clearTimeout
    //         // 라이브러리 인스턴스 제거
    //         console.log('컴포넌트가 화면에 사라짐')

    //     );
    //    }
    // , []);
    // // [] 처음 화면에 나타날 경우에만 수행
    useEffect(() => {
        console.log("user 값이 수정됨")
        console.log(user);
        return(() => {
            console.log("user 값이 수정되기 전");
            console.log(user);    
        });
    }, [user]);
    // useEffect에서 사용하려면 꼭 [] 값을 넣어줘야한다.


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
}


function Ch162({Users, onRemove, onToggle}) {
    return (
        <div>
           {
               Users.map (
                   user => <Ch1621 user={user} onRemove={onRemove} onToggle={onToggle} key={user.id}/>
               )
           }     
        </div>
    );
};

export default Ch162;
