import { combineReducers } from 'redux'
// import posts from './feed/feedReducer'
import { todoListReducer } from './todoList';

export default combineReducers({
  todoList: todoListReducer
});
