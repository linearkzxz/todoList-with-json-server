//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { TodoListContainer } from '../features';

// create a component
class todoListScene extends Component {
  render() {
    return (
      <View>
        <TodoListContainer />
      </View>
    );
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
export default todoListScene;
