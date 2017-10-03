//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { AddTodoContainer } from '../features';

// create a component
class addTodoScene extends Component {
  render() {
    return (
      <AddTodoContainer />
    )
  }
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
});

//make this component available to the app
export default addTodoScene;
