import axios from 'axios'
import {
  HOST,
  TODOS_PATH,
  REQUEST_TODOS, 
  RECEIVE_TODOS,
  FETCH_TODOS_FAILURE,
  ADD_TODO,
  TOGGLE_TODO,
  REMOVE_TODO
} from '../../constants/ActionTypes.js'

import { project } from '../../config'

export const fetchTodosFailure = error => {
  return {
    type: FETCH_TODOS_FAILURE,
    error,
  }
}

export const requestTodos = () => ({
  type: REQUEST_TODOS,
})

export const receiveTodos = json => {
  return ({
    type: RECEIVE_TODOS,
    items: json.data
  })
}

export const fetchTodos = (host, path) => dispatch => {
  dispatch(requestTodos())
  return axios({
    method:'get',
    url: host + path,
    responseType:'json'
  }).then((response) => {
    dispatch(receiveTodos(response))
  }).catch((error) => {
    dispatch(fetchTodosFailure(error)) 
  })
}

export const fetchTodosIfNeeded = () => (dispatch, getState) => {
  return dispatch(fetchTodos(HOST, TODOS_PATH))
}

export const toggleTodo = item => dispatch => {
  const data = {
    text: item.text,
    isComplete: !item.isComplete
  }
  return axios({
    method:'put',
    url: HOST + TODOS_PATH + item.id,
    data: data,
    responseType:'json'
  }).then((response) => {
    dispatch(receiveToggleTodo(item))
  }).catch((error) => {
    dispatch(fetchTodosFailure(error)) 
  })
}

export const receiveToggleTodo = item => ({
  type: TOGGLE_TODO,
  item
})

export const addTodo = text => dispatch => {
  const data = {
    text: text,
    isComplete: false
  }
  return axios({
    method:'post',
    url: HOST + TODOS_PATH,
    data: data,
    responseType:'json'
  }).then((response) => {
    dispatch(receiveAddTodo(response.data))
  }).catch((error) => {
    dispatch(fetchTodosFailure(error)) 
  })
}

export const receiveAddTodo = item => ({
  type: ADD_TODO,
  item
})

export const removeTodo = id => dispatch => {
  return axios({
    method:'DELETE',
    url: HOST + TODOS_PATH + id,
    responseType:'json'
  }).then((response) => {
    dispatch(receiveRemoveTodo(id))
  }).catch((error) => {
    dispatch(fetchTodosFailure(error))
  })
}

export const receiveRemoveTodo = id => ({
  type: REMOVE_TODO,
  id
})