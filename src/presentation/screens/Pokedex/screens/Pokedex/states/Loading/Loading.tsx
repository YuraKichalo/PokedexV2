import React from 'react'
import { ActivityIndicator, View } from 'react-native'
import { styles } from './styles'
import { COLORS } from 'presentation/assets'

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator
      size={'large'}
      color={COLORS.green}
    />
  </View>
)
