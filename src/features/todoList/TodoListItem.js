//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import { CheckBox } from 'native-base';

const styles = StyleSheet.create({
  container: {
    height: 44,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.054)',
  },
  checkBoxView: {
    width: 50
  }
})
// create a component
const TodoListItem = (props) => {

  const {
    id,
    text,
    isComplete,
    handleToggle,
    handleLongPress
  } = props

  return (
    <TouchableHighlight 
      onPress={({id}) => handleToggle(id)}
      onLongPress={({id}) => handleLongPress(id)}
      underlayColor={'rgba(0, 0, 0, 0.05)'}>    
      <View style={styles.container}>
        <View style={styles.checkBoxView}>
          <CheckBox checked={isComplete} onPress={({id}) => handleToggle(id)}/>
        </View>
        <Text>{text}</Text>
      </View>
    </TouchableHighlight>
  );
};

//make this component available to the app
export default TodoListItem;
