const isEmail = (value) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value)) {
    return true
  }
  return false
}

const toPrice = (price) => {
  return `${price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}đ`
}

export const gannerateImageLink = (path) => {
  const API_URL = ExpoConstants.manifest.extra.app.API_URL
  return `${API_URL}/${path}`
}

export { isEmail, toPrice, gannerateImageLink }
