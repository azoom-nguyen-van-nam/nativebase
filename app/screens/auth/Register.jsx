import React from 'react'
import { View } from 'react-native'
import { Screen } from '~components/overrided'

export default ({ navigation }) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Login',
      headerRight: () => <View />
    })
  }, [navigation])

  return <Screen></Screen>
}
