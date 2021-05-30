import React from 'react'
import { TitleProps } from './TitleProps'
import { styles } from './styles'
import { Body } from 'presentation/components'

export const Title = (props: TitleProps) => (
  <Body
    {...props}
    style={[styles.title, props.style]}
  >
    {props.children}
  </Body>
)
