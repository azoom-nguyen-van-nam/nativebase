import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import HomeScreen from '~screens/Home'

const MainStack = createStackNavigator()

const AuthNavigationStack = () => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: ''
        }}
      />
    </MainStack.Navigator>
  )
}

export default AuthNavigationStack
