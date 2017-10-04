//import liraries
import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableHighlight
} from 'react-native';
import PropTypes from 'prop-types'
import { CheckBox } from 'native-base';

const styles = StyleSheet.create({
  container: {
    height: 44,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.05)',
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
  )
}

TodoListItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string,
  isComplete: PropTypes.bool,
  handleToggle: PropTypes.func.isRequired,
  handleLongPress: PropTypes.func.isRequired,
}

TodoListItem.defaultProps = {
  text: '',
  isComplete: false,
}


//make this component available to the app
export default TodoListItem;
