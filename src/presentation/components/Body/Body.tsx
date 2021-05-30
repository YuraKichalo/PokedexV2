import React from 'react'
import { Text } from 'react-native'
import { BodyProps } from './BodyProps'
import { styles } from './styles'

export const Body = (props: BodyProps) => (
  <Text
    {...props}
    style={[
      styles.text,
      props.style
    ]}
  >
    {props.children}
  </Text>
)
