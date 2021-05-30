import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { NewsItemProps } from './NewsItemProps'
import { Body } from 'presentation/components'
import { styles } from './styles'

export const NewsItem = (props: NewsItemProps) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, props.style]}
  >
    <View style={styles.textContainer}>
      <Body style={styles.title}>
        {props.title}
      </Body>
      <Body style={styles.date}>
        {props.date}
      </Body>
    </View>
    <Image
      source={props.imageSource}
      style={styles.image}
    />
  </TouchableOpacity>
)
