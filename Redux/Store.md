# Redux  


## :triangular_flag_on_post: Store  

- const store = createStore(리듀서);
- store.getState() => 현재 store의 state값을 가져오는 함수
- store.dispatch(액션), store.dispatch(액션 생성자()) => 
- const unsubscribe = store.subscribe( () => {} )
  
  - return이 unsubscribe
  - unsubscribe(); 하면 제거 
  - store.replaceReducer(다른 리듀서);