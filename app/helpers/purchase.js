import ExpoConstants from 'expo-constants'
const isRunningInExpo = ExpoConstants.appOwnership === 'expo'

export const getProducts = async (productIds) => {
  if (isRunningInExpo) {
    return [
      {
        productId: 'deposite',
        title: 'Phí trả trước',
        description: 'Phí này sẽ được trừ vào tổng tiền',
        price: 9999
      }
    ]
  }
  const InAppPurchases = await import('expo-in-app-purchases')
  await InAppPurchases.connectAsync()
  const results = await InAppPurchases.getProductsAsync(productIds).catch((e) => {
    return false
  })

  if (!results) {
    await InAppPurchases.disconnectAsync()
    return []
  }
  const { results: products } = results

  return products
}

export const onBuy = async (productId) => {
  if (isRunningInExpo) return true
  const InAppPurchases = await import('expo-in-app-purchases')

  const purchase = await InAppPurchases.purchaseItemAsync(productId)
  if (!purchase) return false

  return new Promise((resolve, reject) => {
    InAppPurchases.setPurchaseListener(async ({ responseCode, results, errorCode }) => {
      if (responseCode === InAppPurchases.IAPResponseCode.OK) {
        results.forEach(async (purchase) => {
          if (!purchase.acknowledged) {
            await InAppPurchases.finishTransactionAsync(purchase)
          }
        })
        await InAppPurchases.disconnectAsync()
        return resolve(true)
      }

      if (responseCode === InAppPurchases.IAPResponseCode.USER_CANCELED) {
        await InAppPurchases.disconnectAsync()
        return reject(new Error('Người dùng đã huỷ giao dịch'))
      }

      await InAppPurchases.disconnectAsync()
      return reject(new Error('Đã có một lỗi xảy ra'))
    })
  })
}
