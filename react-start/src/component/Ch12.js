import React, {useRef} from 'react';
import Ch121 from './Ch121';

function Ch12() {
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

    const nextId = useRef(4); // useState로 하면 reRendering되므로 useRef로 하는게 효율적

    const onCreate = () => {
        console.log(nextId.current); // 4
        nextId.current += 1;
    };

    return (
        <Ch121 Users={Users}/>
    );
};

export default Ch12;

