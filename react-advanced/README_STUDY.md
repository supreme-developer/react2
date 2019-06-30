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

#여러개의 input 상태 관리하기
배운점 : 
 1) 객체의 키값을 동적으로 value로딩시에는 [], 나머지(과연...)는 {} 로딩한다.
 2) spread 문법을 이용해서 기존 객체를 전체를 복사하고 다시 객체를 만들어서 처리해야지, 리액트에서 말하는 개념인 새로운 객체를 만들고 diff해서 repainting 하게 된다.