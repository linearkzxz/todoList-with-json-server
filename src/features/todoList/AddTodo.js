//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput } from 'react-native';
import { Container, Header, Content, Item, Input, Button } from 'native-base';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';
import { addTodo } from './TodoListAction';
import { project } from '../../config';

const styles = StyleSheet.create({
  content: {
    flex: 1,
    flexDirection: 'column',  
    alignItems: 'center',
    paddingHorizontal: 20,    
    marginTop: 20,
    marginBottom: 30
  },
  top: {
    marginTop: 30
  }
})

// create a component
class AddTodo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    }
  }
  
  handelAddTodo = id => {
    this.props.addTodo(this.state.text)
    Actions.pop()
  }

  render() {
    return (
      <View style={styles.content}>
        <Item>
          <Input 
            placeholder="Add todo"
            onChangeText={(text) => this.setState({text: text})}/>
        </Item>
        <View style={styles.top}>
          <Button bordered info onPress={() => this.handelAddTodo()}>
            <Text>Add</Text>
          </Button>
        </View>
      </View>

    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    addTodo: (text) => {
      dispatch(addTodo(text))
    }
  }
}

//make this component available to the app
export default connect(null, mapDispatchToProps)(AddTodo)
