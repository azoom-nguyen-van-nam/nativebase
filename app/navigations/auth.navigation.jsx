import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import LoginScreen from '~screens/auth/Login'
import RegisterScreen from '~screens/auth/Register'

const AuthStack = createStackNavigator()

const AuthNavigationStack = () => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: 'Đăng nhập'
        }}
      />
      <AuthStack.Screen
        name="Register"
        component={RegisterScreen}
        options={{
          title: 'Đăng ký'
        }}
      />
    </AuthStack.Navigator>
  )
}

export default AuthNavigationStack
