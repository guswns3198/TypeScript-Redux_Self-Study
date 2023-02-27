# Redux  


## :triangular_flag_on_post: Reducer  

- 액션을 주면 그 액션이 적용되어 달라진 결과를 만들어 줌
- 순수 함수 (Pure Function)
- Immutable => 리듀서를 통해 스테이트가 달라졌음을 리덕스가 인지하는 방식이기에 Original state는 불변성을 유지해야 한다.
  
## :pencil2: Redux의 Reducer란?  

- function 리듀서(previousState, action) {
  return newState;
}

- 액션을 받아서 state를 return하는 구조
- 인자로 들어오는 previousState와 return되는 newState는 다른 참조를 가지도록 해야 함