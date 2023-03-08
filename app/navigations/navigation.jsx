import React from 'react'
import { StatusBar } from 'react-native'
import AuthNavigationStack from './auth.navigation'
import MainNavigationStack from './main.navigation'

const Navigator = () => {
  const getStack = () => {
    if (!true) {
      return <AuthNavigationStack />
    } else {
      return <MainNavigationStack />
    }
  }

  return (
    <>
      <StatusBar />
      {getStack()}
    </>
  )
}

export default Navigator
