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
  
## :pencil2: Action  

```
// 상태에 변화가 필요할 때 액션을 발생시키게 되는데 이때 액션은 하나의 객체로 전달

{
  type: "ADD_HELLO",
  text: "Hello World"
}
```
  
## :pencil2: Action 생성함수  
```
// 액션 생성함수는 액션을 만드는 함수

export const addHello = text => ({
  type: "ADD_HELLO",
  text
})
```
  
## :pencil2: Reducer  
  
```
// 리듀서는 상태를 변화시키는 함수
// 현재의 상태(state)와 액션(action) 두가지의 인자를 통해 새로운 상태를 반환

const counterReducer = (state, action) => {
  switch(action.type) {
    case 'INCREASE': return state + 1;
    case 'DECREASE': return state - 1;
    
    default:
      return state;
  }
}
```
  
## :pencil2: Store  
  
```
// 스토어는 상태와 리듀서를 포함하는 객체
// 스토어는 앱에서 단 하나만 가질 수 있음
```
  
## :pencil2: Dispatch  
  
```
// Dispatch는 액션을 발생시키는 스토어의 내장함수 중 하나
```