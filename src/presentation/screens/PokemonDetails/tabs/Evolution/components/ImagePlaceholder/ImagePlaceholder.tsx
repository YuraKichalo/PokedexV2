import React from 'react'
import { View } from 'react-native'
import { Icon, Body } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'
import { styles } from './styles'

export const ImagePlaceholder = () => (
  <View style={styles.container}>
    <Icon
      size={30}
      name={'alert'}
      color={COLORS.darkGray}
    />
    <Body style={styles.pokemonsNotLoadedText}>
      {Strings.pokemonDetails.evolution.loadMorePokemons}
    </Body>
  </View>
)
