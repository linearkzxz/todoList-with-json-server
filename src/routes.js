import React from 'react'
import { Scene, Router } from 'react-native-router-flux'
import { project } from './config';
import * as scene from './scenes'
import { Actions } from 'react-native-router-flux';

export const Scenes = [
  { 
    key: 'todoListScene',
    component: 'todoListScene',
    title: 'Todo List',
    options: { 
      initial: true,
      onRight: () => Actions.addTodoScene(),
      rightTitle: 'Add' 
    }
  },
  { key: 'addTodoScene', component: 'addTodoScene', title: 'Add Todo', options: {} },
]

const renderScene = ({ key, component, title, options, childrens = [] }, module) => {
  const props = {
    key,
    component: component ? module[component] : undefined,
    title,
    ...options,
    panHandlers: null
  }
  return (
    <Scene {...props}>
      {childrens.map(children => renderScene(children, module))}
    </Scene>
  )
}

const renderScenes = (sceneArr = [], module) => (
  sceneArr.map(value => renderScene(value, module))  
)

const Routes = () => {
  return (
    <Router sceneStyle={{ marginTop: 70 }}>
      {renderScenes(Scenes, scene)}
    </Router>
  )
}

export default Routes