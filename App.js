import 'react-native-gesture-handler'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { theme } from './app/plugins/nativebase'
import { NativeBaseProvider } from 'native-base'
import AppNavigator from './app/navigations/navigation'

const App = () => {
  return (
    <NavigationContainer>
      <NativeBaseProvider theme={theme}>
        <AppNavigator />
      </NativeBaseProvider>
    </NavigationContainer>
  )
}

export default App
