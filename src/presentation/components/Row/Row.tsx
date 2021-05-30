import React from 'react'
import { View } from 'react-native'
import { RowProps } from './RowProps'
import { style } from './styles'

export const Row = (props: RowProps) => (
  <View
    {...props}
    style={[
      style.container,
      props.centered && { alignItems: 'center' },
      props.style
    ]}
  >
    {props.children}
  </View>
)
