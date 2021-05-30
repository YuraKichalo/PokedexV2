import React, { FC } from 'react'
import { TouchableOpacity } from 'react-native'
import { HeaderProps } from './HeaderProps'
import { styles } from './styles'
import { Row, IconGoBack, Icon } from 'presentation/components'
import { COLORS } from 'presentation/assets'

export const Header: FC<HeaderProps> = (props) => {
  const color = props.theme === 'light' ? COLORS.primary : COLORS.black

  return (
    <Row
      {...props}
      centered
      style={[styles.container, props.style]}
    >
      <IconGoBack
        style={styles.iconGoBack}
        color={color}
      />
      {props.rightIconTitle && (
        <TouchableOpacity
          onPress={props.onRightIconPress}
          style={styles.iconMenuContainer}
        >
          <Icon
            size={30}
            name={props.rightIconTitle}
            color={color}
          />
        </TouchableOpacity>
      )}
    </Row>
  )
}

Header.defaultProps = {
  theme: 'dark'
}
