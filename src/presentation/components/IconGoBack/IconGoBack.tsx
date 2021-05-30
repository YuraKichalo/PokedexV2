import React from 'react'
import { TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { Icon } from '../Icon'
import { IconGoBackProps } from './IconGoBackProps'
import { COLORS } from '../../assets/theme'

export const IconGoBack = (props: IconGoBackProps) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      {...props}
      onPress={navigation.goBack}
    >
      <Icon
        size={30}
        name='arrow-back'
        color={props.color}
      />
    </TouchableOpacity>
  )
}

IconGoBack.defaultProps = {
  color: COLORS.black
}
