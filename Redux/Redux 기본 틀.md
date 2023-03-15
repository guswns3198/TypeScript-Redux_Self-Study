# Redux  


## :triangular_flag_on_post: Redux 기본 틀  

## :pencil2: Redux란 무엇일까?!  

- 리액트에서 가장 많이 사용하는 상태관리 라이브러리
- 리액트 컴포넌트들의 상태 로직들이나 글로벌 상태 관리를 손쉽게 할 수 있음
- 크게 Action, Reducer, Store, View로 구성되어 있다.

![](https://velog.velcdn.com/images/nowod_it/post/5fd8ca33-c4bb-45c6-a77b-ba088f185874/image.png)  
  
1. UI에서 클릭 이벤트 발생
2. 이벤트 핻르러에서 해당되는 Action을 Dispatch
3. Action이 Reducer로 넘어오면서 state값을 변경
4. 변경된 state 값이 View(UI)로 전달
  
위와같은 일련의 과정을 통해 상태를 다루게 된다.