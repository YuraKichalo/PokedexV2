import React from 'react'
import { FlatList, Image, TouchableOpacity } from 'react-native'
import { FavouritePokemonsProps } from './FavouritePokemonsProps'
import { styles } from './styles'

export const FavouritePokemons = ({ viewModel, router }: FavouritePokemonsProps) => (
  <FlatList
    keyExtractor={(pokemon) => pokemon.name}
    data={viewModel.favouritePokemons}
    numColumns={2}
    contentContainerStyle={styles.scrollContentContainer}
    renderItem={({ item }) => (
      <TouchableOpacity
        style={styles.pokemonImageContainer}
        onPress={() => router.navigateToPokemonDetails(item)}
      >
        <Image
          source={{ uri: item.sprite }}
          style={styles.pokemonImage}
        />
      </TouchableOpacity>
    )}
  />
)
