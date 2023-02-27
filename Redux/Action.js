// 액션생성함수 만들기

const ADD_TODO = 'ADD_TODO';

function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
};