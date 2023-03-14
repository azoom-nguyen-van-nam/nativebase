import { showMessage } from 'react-native-flash-message'

export const error = (message, title) => {
  return showMessage({
    message: title || 'Thông báo lỗi',
    description: message,
    type: 'danger'
  })
}

export const success = (message, title) => {
  return showMessage({
    message: title || 'Thông báo thành công',
    description: message,
    type: 'success'
  })
}

export default { error, success }
