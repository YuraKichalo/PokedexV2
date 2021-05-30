import React, { useState } from 'react'
import { View, TextInput as RNTextInput } from 'react-native'
import { styles } from './styles'
import { Icon } from 'presentation/components'
import { TextInputProps } from './TextInputProps'

export const TextInput = ({ onChangeText, ...props }: TextInputProps) => {
  const [isPlaceHolderActive, setIsPlaceHolderActive] = useState(!props.value)

  const handleInputChange = (text: string) => {
    setIsPlaceHolderActive(text === '')
    onChangeText?.(text)
  }

  return (
    <View style={[styles.container, props.containerStyles]}>
      <Icon
        size={22}
        name='search'
        style={styles.icon}
      />
      <RNTextInput
        {...props}
        onChangeText={handleInputChange}
        style={
          isPlaceHolderActive
            ? [styles.input, styles.placeholder]
            : styles.input
        }
      />
    </View>
  )
}
