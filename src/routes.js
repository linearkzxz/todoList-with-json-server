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
  { key: 'addTodoScene', component: 'addTodoScene',
    title: 'Add Todo', options: {} },
  { key: 'modularAbout', component: 'About', title: 'm About', options: {} },
  { key: 'modularForm', component: 'Form', title: 'm Form', options: {} },
  { key: 'modularDefaultForm', component: 'DefaultFrom', title: 'm DefaultForm', options: {} },
  { key: 'modularInitForm', component: 'InitFrom', title: 'm InitForm', options: {} },
  { key: 'modularValidateForm', component: 'ValidateFrom', title: 'm ValidateForm', options: {} },
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
      {/* <Scene key={'todoListScene'} component='todoListScene' title='Todo List' initial/> */}
      {renderScenes(Scenes, scene)}
    </Router>
  )
}

export default Routes


// { key: 'todoListScene', component: 'todoListScene', title: 'Todo List', options: { initial: true, onRight={() => alert('Right button')}, rightTitle="Right" } },  
