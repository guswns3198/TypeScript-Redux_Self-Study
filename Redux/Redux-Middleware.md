# Redux  


## :triangular_flag_on_post: Redux-Middleware  
  
- 미들웨어가 "디스패치"의 앞뒤에 코드를 추가할 수 있게 해줌
- 미들웨어가 여러개면 미들웨어가 "순차적으로" 실행
- 두 단계가 존재
  - 스토어를 만들 때, 미들웨어를 설정하는 부분 {createStore, applyMiddleware} from redux
  - 디스패치가 호출될 때 실제로 미들웨어가 통과하는 부분
- dispatch 메서드를 통해 store로 가고 있는 액션을 가로채는 코드