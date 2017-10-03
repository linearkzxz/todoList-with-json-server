import { 
  REQUEST_TODOS, 
  RECEIVE_TODOS,
  FETCH_TODOS_FAILURE,
  ADD_TODO, 
  TOGGLE_TODO,
  REMOVE_TODO
} from '../../constants/ActionTypes'

function posts(state = {
  isFetching: false,
  error: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_TODOS:    
    return {
      ...state,
    }
    case RECEIVE_TODOS:    
      return {
        ...state,
        items: action.items,
      }
    case FETCH_TODOS_FAILURE:
      return {
        ...state,
        isFetching: false,
        error: action.error
      }
    case ADD_TODO:
      return {
        ...state,
        isFetching: true,
        items: [...state.items, action.item]
      }
    case TOGGLE_TODO:
      return {
        ...state,
        isFetching: false,
        items: state.items.map(item => {
          if (item.id === action.item.id) {
            return {
              ...action.item,
              isComplete: !item.isComplete
            }
          }
          else {
            return item
          }
        })
      }
    case REMOVE_TODO:
      return {
        ...state,
        isFetching: true,
        items: state.items.filter(item => item.id !== action.id)
      }
    default:
      return state;
  }
}

export default posts