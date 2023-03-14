import React from 'react'
import { View } from 'native-base'
import { ActivityIndicator } from 'react-native'

export default ({ tintColor }) => {
  return (
    <View position={'absolute'} h="full" w="full" left="0" top="0" alignItems={'center'} justifyContent={'center'}>
      <ActivityIndicator color={tintColor} size="large" />
    </View>
  )
}
