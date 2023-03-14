import React from 'react'
import { View, ScrollView, RefreshControl } from 'react-native'

export default React.memo(({ styles, children, onRefresh = () => {}, refreshing = false, ...props }) => {
  return (
    <View
      {...props}
      style={{
        width: '100%',
        height: '100%',
        position: 'relative',
        backgroundColor: '#fff',
        ...styles
      }}
    >
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1
        }}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      >
        {children}
      </ScrollView>
    </View>
  )
})
