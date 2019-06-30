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
// import Hello from './component/Hello'
// import Wrapper from './component/Wrapper'
// import Counter from './component/Counter'
import InputSample from './component/InputSample'

// isSpecial 만 넣어줄시 isSpecial={true} 와 동일
function App() {
  return (
    // <Wrapper>
    //   <Hello name="react" color="red" isSpecial={true}/>
    //   <Hello color="pink"/>
    // </Wrapper>
    // <Counter />
    <InputSample/>
  );
}

export default App;
