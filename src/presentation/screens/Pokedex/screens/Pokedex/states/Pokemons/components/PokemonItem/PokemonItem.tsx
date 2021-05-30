import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { styles } from './styles'
import { Body, ChildrenSpacing } from 'presentation/components'
import { PokemonItemProps } from './PokemonItemProps'
import { capitalize, getTypeColor } from 'presentation/utils'

export const PokemonItem = (props: PokemonItemProps) => (
  <TouchableOpacity
    {...props}
    style={[styles.container, props.style]}
  >
    <LinearGradient
      colors={
        props.types.length > 1
          ? [getTypeColor(props.types[0])!, getTypeColor(props.types[1])!]
          : [getTypeColor(props.types[0])!, getTypeColor(props.types[0])!]
      }
      locations={[0.6, 0]}
      style={styles.gradientContainer}
    >
      <Body style={styles.name}>
        {capitalize(props.name)}
      </Body>
      <ChildrenSpacing spacing={8}>
        {props.types.map(type => (
          <View
            key={type}
            style={styles.typeContainer}
          >
            <Body style={styles.type}>
              {type}
            </Body>
          </View>
        ))}
      </ChildrenSpacing>
      <Image
        source={{
          uri: props.sprite
        }}
        style={styles.pokemonImage}
      />
    </LinearGradient>
  </TouchableOpacity>
)
