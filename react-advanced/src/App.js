// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useRef, useState } from 'react';
// import Hello from './component/Hello'
// import Wrapper from './component/Wrapper'
// import Counter from './component/Counter'
// import InputSample from './component/InputSample'
// import InputSample1 from './component/InputSample1'
// import InputSample2 from './component/InputSample2'
// import UserList from './component/UserList'
// import UserList2 from './component/UserList2'
import UserListRef from './component/UserListRef'
import CreateUser from './component/CreateUser'

// isSpecial 만 넣어줄시 isSpecial={true} 와 동일
function App() {
  const [inputs, setInputs] = useState({
    username : '',
    email : ''
  });

  const {username, email} = inputs;
  const onChange = e => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name] : value
    })
  }


  const [users, setUsers] = useState([
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
  ]);

  const nextId = useRef(4);
  const onCreate = () => {
    const user = {
      id : nextId.current,
      username,
      email
    }

    // 배열에 추가할 경우에는 아래와 같이 [] 감싸준다.
    //setUsers([...users, user]);
    setUsers(users.concat(user));

    setInputs({
      username : '',
      email : ''
    })

    nextId.current += 1;
  };

  const onRemove = id => {

    setUsers(users.filter(user => user.id !== id));
  }

  return (
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial={true}/>
    //   <Hello color="pink"/>
    // </Wrapper>
    // <Counter />
    // <InputSample/>
    // <InputSample2/>
    // <UserList />
    // <UserList2 />
    <>
      <CreateUser 
       username={username}
       email={email}
       onChange={onChange}
       onCreate={onCreate}/>
      
      <UserListRef Users={users} onRemove={onRemove}/>
    </>
    
  );
}

export default App;
