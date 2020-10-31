import React, {Component} from 'react';
import { createStackNavigator } from 'react-navigation-stack'; 
import { createAppContainer } from 'react-navigation';
import SignIn from './SignIn'
import SignUp from './SignUp'
const AppStackNavigator = createStackNavigator({ 

  SignUp:{
    screen: SignUp
  },
   
  SignIn:{
    screen:SignIn
  },

},
    navigationOptions={
      headerMode:'none'
})

const App = createAppContainer(AppStackNavigator);

export default App;