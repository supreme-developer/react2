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
