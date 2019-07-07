## useState를 통해 컴포넌트에서 바뀌는 값 관리하기

개념 : 컴포넌트에서 보여줘야하는 내용이 사용자 인터랙션에 따라 바뀌어야 할때 리액트 Hooks기능 중 하나인 useState를 사용
배운점 :
 1) 바인딩 개념 : 예전 wpf binding 개념과 동일하게 리액트에서도 변수나 속성을 지정 시 {} 중괄호를 사용해서 처리한다.(양방향으로 값을 변경하고 뷰에 연결해주는 것이 현재 코딩 대세??)
 2) 비구조화 할당 : 
   1. const [number, setNumber] = useState(0);
   
   2. const numberState = useState(0);
      const number = numberState[0];
      const setNumber = numberState[1];

    => 동일한 동작을 하지만 비구조화 할당으로 간단하게 표기를 할수 있다.

## input 상태 관리하기
배운점 : 
 1) 리액트에서 직접 Dom의 값을 가져올 경우 event객체의 target.value로 접근해서 가져온다는 것을 알게 되었다.(다른 방법은 없는걸까?? virtualdom 핸들링과 같이)

## 여러개의 input 상태 관리하기
배운점 : 
 1) 객체의 키값을 동적으로 value로딩시에는 [], 나머지(과연...)는 {} 로딩한다.
 2) spread 문법을 이용해서 기존 객체를 전체를 복사하고 다시 객체를 만들어서 처리해야지, 리액트에서 말하는 개념인 새로운 객체를 만들고 diff해서 repainting 하게 된다.

## useRef로 특정 DOM 선택하기
개념 : JS에서 특정 DOM 선택 시 getElementById, querySelector같은 DOM Selector 함수를 사용해서 DOM을 선택한다.
       그럼 리액트에서는 왜 특정 DOM 선택을 해야할일이 있을까?? 특정 엘리머트 크기, 스크롤바 위치, 다양한 라이브러리를 특정 DOM에 적용시 사용될 수 있다.

배운점 :
 1) 리액트에서는 리액트 Hook 에서 제공하는 함수인 useRef로 특정 DOM 선택이 가능하다.
 2) JSX에서 ref로 리액트 Hook 값을 바인딩 하고 그 이후에 바인딩된 객체를 current.focus같이 접근이 가능하다.


## 배열 렌더링하기
실수한점 : 
 1) 객체의 props 전달하는 법에 대한 이해가 부족했음<User user={users[0]}/>
 2) 배열 내장함수 map 사용방법에 대한 숙지가 미숙했음

배운점 :
 1) 리액트에서 배열의 값을 리렌더링 할 시 index값을 지정하지 않을경우에는 삽입,수정,삭제할 시 불필요한 리렌더링 처리가 들어가게 된다. 
  index 지정 전 : a, b, c, d -> b  삭제 시 b->c, c->d, d삭제
  index 지정 : b에 리스트만 삭제 후 리렌더링 처리

# UseRef 사용하기
왜 해야할까??
 1) 변수의 값을 바꾼다고 해서 컴포넌트가 리렌더링 되지 않기위해서 사용
 2) useState 사용하면 안됨?? 
   -> 컴포넌트 연결하지 않는다면 똑같이 기억되지 않을까??
   -> 전역변수로 사용한다면 안되려나??

# 배열에 항목 추가하기
실수한점 : 
 1) useState([]) 배열 State값의 상태를 확인할 경우에는 set할 경우에도 []로 세팅해줘야한다.
 const [users, setUsers] = useState([]);
 setUsers([...users, user]);

 배운점 : 
  1) 변경된 상태값을 렌더링 할 떄에도 건건히 하는게 아닌 {}, [] 전체를 넘겨서 추가/삭제/수정을 해야할 것 같음(건건히 추가하면 가독성만 나빠짐)
  2) dom target값을 얻어올때에도 비구조화 할당을 사용할 수 있다는것에 놀랐음() const { name, value } = e.target;


 