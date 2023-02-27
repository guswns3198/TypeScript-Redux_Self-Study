# Redux  


## :triangular_flag_on_post: Store  

- const store = createStore(리듀서);
- store.getState() => 현재 store의 state값을 가져오는 함수
- store.dispatch(액션), store.dispatch(액션 생성자()) => 액션을 인자로 넣어서 store의 상태를 변경시키는 함수
- const unsubscribe = store.subscribe( () => {} ) => store에 변경이 생겼을 때 () => {} 이 함수를 실행하도록 하는 함수
  - return이 unsubscribe
  - unsubscribe(); 하면 제거 
- store.replaceReducer(다른 리듀서); => 원래 가진 리듀서를 다른 리듀서로 바꾸는 기능