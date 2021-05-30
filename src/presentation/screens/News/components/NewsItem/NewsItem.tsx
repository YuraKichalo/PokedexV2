import React from 'react'
import { Image, View } from 'react-native'
import { NewsItemProps } from './NewsItemProps'
import { styles } from './styles'
import { Body, Title } from 'presentation/components'

export const NewsItem = (props: NewsItemProps) => (
  <View
    {...props}
  >
    <Image
      source={props.imageSource}
      style={styles.image}
    />
    <Title style={styles.title}>
      {props.title}
    </Title>
    <Body style={styles.date}>
      {props.date}
    </Body>
    <Body style={styles.text}>
      {props.text}
    </Body>
  </View>
)
