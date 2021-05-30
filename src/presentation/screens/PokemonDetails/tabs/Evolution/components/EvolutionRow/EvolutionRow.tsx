import React from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import { EvolutionRowProps } from './EvolutionRowProps'
import { Body, Icon } from 'presentation/components'
import { COLORS } from 'presentation/assets'
import { styles } from './styles'
import { ImagePlaceholder } from '../ImagePlaceholder'

export const EvolutionRow = (props: EvolutionRowProps) => (
  <View
    {...props}
    style={[styles.container, props.style]}
  >
    {!props.evolveFromPokemon && (
      <ImagePlaceholder />
    )}
    {props.evolveFromPokemon && (
      <TouchableOpacity
        disabled={props.currentPokemon.id === props.evolveFromPokemon.id}
        onPress={() => props.onPokemonImagePress(props.evolveFromPokemon)}
      >
        <Image
          source={{ uri: props.evolveFromPokemon.sprite }}
          style={styles.pokemonImage}
        />
      </TouchableOpacity>
    )}
    <View style={styles.levelContainer}>
      <Icon
        size={30}
        color={COLORS.gray}
        name='arrow-forward-circle'
      />
      <Body style={styles.level}>
        Lvl {props.level}
      </Body>
    </View>
    {!props.evolveToPokemon && (
      <ImagePlaceholder />
    )}
    {props.evolveToPokemon && (
      <TouchableOpacity
        disabled={props.currentPokemon.id === props.evolveToPokemon.id}
        onPress={() => props.onPokemonImagePress(props.evolveToPokemon)}
      >
        <Image
          source={{ uri: props.evolveToPokemon.sprite }}
          style={styles.pokemonImage}
        />
      </TouchableOpacity>
    )}
  </View>
)
