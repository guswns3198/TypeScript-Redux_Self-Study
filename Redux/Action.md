# Redux  


## :triangular_flag_on_post: Action  

- Action은 사실 그냥 객체(object)이다.
- 두가지 형태의 Action이 있다.
1. {type: 'TEST'} => payload 없는 Action
2. {type: 'TEST', params: 'hello'} => payload 있는 액션  

- type만 필수 프로퍼티이며 type은 string 이다.  
  
## :pencil2: Redux의 액션 생성자란?  

- function 액션생성자(...agrs) {
  return 액션;
}

- 액션을 생성하는 함수를 "액션 생성자(Action Creator)" 라고 부름
- 함수를 통해 액션을 생성하고 액션 객체를 리턴
- createTest('hello'); // {type: 'TEST', params: 'hello'} 리턴  
  
## :pencil2: Redux의 액션은 어떤 일을 할까?!
  
- Action 생성자를 통해 액션을 만들어 낸다.
- 만들어낸 Action 객체를 Redux Store로 보낸다.
- Redux Store가 Action 객체를 받으면 Store의 상태 값 변경
- 변경된 상태값에 의해 상태를 이용하고 있는 컴포넌트가 변경
- 액션은 Store에 보내는 일종의 인풋같은 것