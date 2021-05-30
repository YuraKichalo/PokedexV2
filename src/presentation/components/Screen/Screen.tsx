import React from 'react'
import { View, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { ScreenProps } from './ScreenProps'
import { styles } from './styles'

export const Screen = (props: ScreenProps) => {
  const screen = (
    <View
      {...props}
      style={[styles.screen, props.style]}
    />
  )

  if (props.hideKeyboardWhenTouch) {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        {screen}
      </TouchableWithoutFeedback>
    )
  }

  return screen
}
