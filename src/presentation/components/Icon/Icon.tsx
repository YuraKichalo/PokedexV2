import React from 'react'
import { View } from 'react-native'
import IconIonicons from 'react-native-vector-icons/Ionicons'
import { IconProps } from './IconProps'

export const Icon = (props: IconProps) => (
  <View
    {...props}
  >
    <IconIonicons
      name={props.name}
      size={props.size}
      color={props.color}
    />
  </View>
)
