// 액션생성함수 만들기

export const ADD_TODO = 'ADD_TODO';

export function addTodo(todo) {
  return {
    type: ADD_TODO,
    todo,
  };
};