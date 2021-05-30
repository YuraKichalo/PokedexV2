import React from 'react'
import { View } from 'react-native'
import { Body } from 'presentation/components'
import { Strings } from 'presentation/assets'
import { styles } from './styles'

export const FavouritePokemonsNotSelected = () => (
  <View style={styles.container}>
    <Body style={styles.text}>
      {Strings.favouritePokemons.favouritePokemonsNotSelected}
    </Body>
  </View>
)
