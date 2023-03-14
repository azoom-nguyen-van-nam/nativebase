import AsyncStorage from '@react-native-async-storage/async-storage'

const setToken = (token) => {
  return AsyncStorage.setItem('AUTH_TOKEN', token)
}

const getToken = () => {
  return AsyncStorage.getItem('AUTH_TOKEN')
}

const clearToken = () => {
  return AsyncStorage.removeItem('AUTH_TOKEN')
}

export { setToken, getToken, clearToken }
