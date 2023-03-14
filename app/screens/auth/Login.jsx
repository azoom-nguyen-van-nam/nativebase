import React from 'react'
import { View } from 'react-native'
import { Screen } from '~components/base'

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerRight: () => <View />
    })
  }, [navigation])

  return <Screen></Screen>
}
