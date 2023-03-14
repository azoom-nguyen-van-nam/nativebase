import axios from 'axios'
import Constants from 'expo-constants'
import { useDispatch } from 'react-redux'
import * as AsyncStorage from '~helpers/async-storage'
import * as Toast from '~helpers/toast'
import { setLoggedIn, setLoading } from '~store/app.slice'

const baseAPI = axios.create({
  baseURL: Constants.manifest.extra.app.BASE_API_URL,
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json'
  }
})

const useApi = () => {
  const dispatch = useDispatch()

  baseAPI.interceptors.request.use(
    async (config) => {
      dispatch(setLoading(true))
      const appToken = await AsyncStorage.getToken()
      config.headers.Authorization = `Bearer ${appToken}`
      return config
    },
    (e) => {
      dispatch(setLoading(false))
      Toast.error('Đã có lỗi xảy ra khi thực hiện lấy dữ liệu')
      return Promise.reject(e)
    }
  )

  baseAPI.interceptors.response.use(
    (response) => {
      dispatch(setLoading(false))
      return response
    },
    (e) => {
      if (e.response.status === 401) {
        AsyncStorage.clearToken()
        dispatch(setLoggedIn(false))
        Toast.error('Phiên đăng nhập đã hết hạn !')
        return
      }
      dispatch(setLoading(false))
      return Promise.reject(e)
    }
  )
  return baseAPI
}

export default useApi
