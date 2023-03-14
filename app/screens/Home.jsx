import React from 'react'
import { Box, Button, Center, useTheme, Text } from 'native-base'

export default ({ navigation }) => {
  const theme = useTheme()
  React.useLayoutEffect(() => {
    navigation.setOptions({
      title: 'Home',
      headerRight: () => <Box />
    })
  }, [navigation])

  return (
    <Box>
      <Center>
        <Button>Press me</Button>
      </Center>
    </Box>
  )
}
