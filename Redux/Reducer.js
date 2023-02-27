import { ADD_TODO } from "./Action";

export function todoApp(previousState, action) {
  return previousState;
} // 이러면 액션을 받더라도 return이 previousState라서 아무 변화가 없음


// state
// ['코딩', '점심 먹기'];

const initialState = [];

function todoApp(previousState = initialState, action) {
  // 초기값 설정해주는 부분 예시 중 하나
  // if (previousState === undefined) {
  //   return [];
  // }

  if (action.type === ADD_TODO) {
    return [...previousState, action.todo];
  }
  
  return previousState;
} // 이러면 액션을 받더라도 return이 previousState라서 아무 변화가 없음