//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, Alert } from 'react-native';
import { Spinner } from 'native-base';
import { connect } from 'react-redux';
import { fetchTodosIfNeeded, toggleTodo, removeTodo } from './TodoListAction';
import TodoListItem from './TodoListItem'
import { project } from '../../config';

// create a component
class TodoListList extends Component {
  componentDidMount() {
    this.props.fetchTodosIfNeeded()
  }

  handleToggle = id => {
    const { toggleTodo, items } = this.props
    toggleTodo(...items.filter(item => item.id === id))
  }

  handleLongPress = id => {
    const { removeTodo } = this.props    
    Alert.alert(
      'Remove todo?',
      '',
      [
        {text: 'OK', onPress: () => removeTodo(id)},        
        {text: 'Cancel', onPress: () => false, style: 'cancel'},
      ],
      { cancelable: false }
    )
  }

  keyExtractor = (item, index) => item.id
  
  renderItem = ({item}) => (
    <TodoListItem
      id = {item.id}
      text = {item.text}
      isComplete = {item.isComplete}
      handleToggle = {() => this.handleToggle(item.id)}
      handleLongPress = {() => this.handleLongPress(item.id)}
    />
  )

  render() {
    const { dispatch, items, isFetching } = this.props
    const isEmpty = items ? false : true

    return (
      <View>
        { isEmpty
        ? 
          (isFetching ? <Spinner color='lightgray' /> : <Text>Empty.</Text>) 
        : 
          <FlatList
            data={items}
            keyExtractor={this.keyExtractor}
            renderItem={this.renderItem}
          />
        }
      </View>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const { todoList } = state[project.name]
  const { isFetching, items } = todoList

  return {
    todoList: todoList,
    isFetching: isFetching,
    items: items
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchTodosIfNeeded: () => {
      dispatch(fetchTodosIfNeeded())
    },
    toggleTodo: (item) => {
      dispatch(toggleTodo(item))
    },
    removeTodo: (id) => {
      dispatch(removeTodo(id))
    },
  }
}

//make this component available to the app
export default connect(mapStateToProps, mapDispatchToProps)(TodoListList)
