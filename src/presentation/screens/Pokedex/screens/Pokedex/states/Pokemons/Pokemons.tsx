import React from 'react'
import { FlatList, View } from 'react-native'
import { BlurView } from '@react-native-community/blur'
import { PokemonsProps } from './PokemonsProps'
import { styles } from './styles'
import { PokemonItem } from './components'

const NEW_POKEMONS_COUNT = 10
const BLUR_VIEW_HIGHT = 55

export const Pokemons = ({ viewModel, router }: PokemonsProps) => (
  <>
    <View style={styles.container}>
      <FlatList
        keyExtractor={(pokemon) => pokemon.name}
        data={viewModel.pokemons}
        contentContainerStyle={[styles.pokemonsList, { paddingBottom: BLUR_VIEW_HIGHT }]}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        renderItem={({ item }) => (
          <PokemonItem
            name={item.name}
            types={item.types}
            sprite={item.sprite}
            onPress={() => router.navigateToPokemonDetail(item)}
          />
        )}
        onRefresh={() => {
          viewModel.setOffset(NEW_POKEMONS_COUNT)
        }}
        refreshing={viewModel.isLoading}
        onEndReached={() => console.log('END')}
        onEndReachedThreshold={2}
      />
    </View>
    <BlurView
      blurType='light'
      blurAmount={5}
      style={[styles.blur, { height: BLUR_VIEW_HIGHT }]}
    />
  </>
)
