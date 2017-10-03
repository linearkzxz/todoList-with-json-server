//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { connect } from 'react-redux';

import { project } from '../../config';
// import { fetchPostsIfNeeded } from './FeedAction';
import TodoListList from './TodoListList';

// create a component
class TodoListContainer extends Component {

  // componentDidMount() {
  //   this.props.fetchPost()
  // }

  render() {
    return (
      <TodoListList></TodoListList>
    )
  }
}

// const mapStateToProps = (state, ownProps) => {
//   return {
//     feed: state[project.name].feed
//   }
// }

// const mapDispatchToProps = (dispatch, ownProps) => {
//   return {
//     fetchPost: () => {
//       dispatch(fetchPostsIfNeeded())
//     }
//   }
// }

//make this component available to the app
export default TodoListContainer
