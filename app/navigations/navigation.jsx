import React from 'react'
import { StatusBar } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { preventAutoHideAsync, hideAsync } from 'expo-splash-screen'

import { setLoggedIn } from '~store/app.slice'
import * as AsyncStorage from '~helpers/async-storage'
import useApi from '~helpers/api'

import FlashMessage from 'react-native-flash-message'
import AuthNavigationStack from './auth.navigation'
import MainNavigationStack from './main.navigation'
import Loading from '~components/Loading'

const Navigator = () => {
  const isLoading = useSelector((state) => state.app.isLoading)
  const isLoggedIn = useSelector((state) => state.app.isLoggedIn)
  const dispatch = useDispatch()
  const appApi = useApi()

  preventAutoHideAsync()
  React.useEffect(() => {
    appApi.get('/user/me').catch(() => false)
    AsyncStorage.getToken().then(async (token) => {
      if (token) {
        dispatch(setLoggedIn(true))
      }
      await hideAsync()
    })
  }, [])

  const getStack = React.useCallback(() => {
    if (!isLoggedIn) {
      return <AuthNavigationStack />
    } else {
      return <MainNavigationStack />
    }
  }, [isLoggedIn])

  return (
    <>
      <StatusBar />
      {getStack()}
      {isLoading && <Loading color={'primary.600'} />}
      <FlashMessage statusBarHeight={45} position="top" floating={true} />
    </>
  )
}

export default Navigator
