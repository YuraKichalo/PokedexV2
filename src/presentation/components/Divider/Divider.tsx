import React from 'react'
import { View } from 'react-native'
import { DividerProps } from './DividerProps'

export const Divider = (props: DividerProps) => (
  <View
    {...props}
    style={[
      { height: props.height, backgroundColor: props.color },
      props.style
    ]}
  />
)
