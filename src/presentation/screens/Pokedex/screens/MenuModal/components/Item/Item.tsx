import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import { Body, Icon } from 'presentation/components'
import { ItemProps } from './ItemProps'
import { styles } from './styles'
import { COLORS } from 'presentation/assets'

export const Item = (props: ItemProps) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, props.style]}
  >
    <Icon
      size={27}
      color={props.iconColor}
      name={props.iconName}
    />
    <View style={styles.textContainer}>
      <Body style={styles.title}>
        {props.title}
      </Body>
    </View>
  </TouchableOpacity>
)

Item.defaultProps = {
  iconColor: COLORS.darkGray
}
