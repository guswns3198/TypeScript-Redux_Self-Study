import { createStore } from 'redux';
import { todoApp } from './Reducer';
import { addTodo } from './Action';

const store = createStore(todoApp);
store.dispatch(addTodo("study"));

// console.log(store.getState()); => ["study"]

export default store;