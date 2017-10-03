//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux';
import AddTodo from './AddTodo';

// create a component
class AddTodoContriner extends Component {

  render() {
    return (
      <AddTodo></AddTodo>
    )
  }
}

//make this component available to the app
export default AddTodoContriner
