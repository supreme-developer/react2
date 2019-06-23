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


import React from 'react';
import Hello from './component/Hello';
import './App.css';


function App() {
  const name = 'react';
  const style = {
    backgroundColor: 'black',
    color: 'aqua',
    fontSize: 24, // 기본 단위 px
    padding: '1rem' // 다른 단위 사용 시 문자열로 설정
  }
  return (
    <div>
      <Hello />
      <Hello />
      <Hello 
        // 열리는 태그 내부에서는 // 주석 사용가능
      />
      {/* </div> 태그는 꼭 닫아야한다.
          <Hello /><div>!!</div> 두 개 이상의 태그는 무조건 하나의 태그로 감싸야한다.
          <><Hello /><div>!!</div></> Fragment 사용해서 감싸도 가능*/
      }

      <div>{name}</div> {/* JSX 안에 자바스크립트 값 사용하기*/ }
      <div style={style}>{name}</div> {/* JSX 안에 style 사용하기*/ }
      <div className="gray-box"></div> {/* JSX 안에 class 사용하기*/ }
    </div>
  );
}

export default App;
