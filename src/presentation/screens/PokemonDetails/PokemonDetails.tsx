import React, { useState } from 'react'
import { Image, ScrollView, StatusBar, View } from 'react-native'
import { observer } from 'mobx-react'
import LinearGradient from 'react-native-linear-gradient'
import Swiper from 'react-native-swiper'
import { useRoute } from '@react-navigation/native'
import { styles } from './styles'
import { Body, Header, Row, Screen, Title } from 'presentation/components'
import { PokemonDetailsRouteProp } from './PokemonDetailsRouteProp'
import { capitalize, getTypeColor } from 'presentation/utils'
import { TabsController } from './components/TabsController'
import * as Tabs from './tabs'
import { PokemonDetailsViewModel } from './PokemonDetailsViewModel'

const formatPokemonsOrderValue = (number: number) => {
  if (number >= 100) {
    return `#${number}`
  } else if (number >= 10) {
    return `#0${number}`
  } else {
    return `#00${number}`
  }
}

export const PokemonDetails = observer(() => {
  const route = useRoute<PokemonDetailsRouteProp>()
  const { pokemon } = route.params
  const [viewModel] = useState(() => new PokemonDetailsViewModel())

  return (
    <Screen style={{ backgroundColor: getTypeColor(pokemon.types[0]) }}>
      <StatusBar barStyle='light-content' />
      <LinearGradient
        colors={
          pokemon.types.length > 1
            ? [getTypeColor(pokemon.types[0])!, getTypeColor(pokemon.types[1])!]
            : [getTypeColor(pokemon.types[0])!, getTypeColor(pokemon.types[0])!]
        }
        locations={[0.6, 0]}
        style={styles.container}
      >
        <Header
          theme='light'
          rightIconTitle={viewModel.favouritePokemons.includes(pokemon) ? 'ios-heart' : 'ios-heart-outline'}
          onRightIconPress={() => viewModel.setFavouritePokemons(pokemon)}
        />
        <Row
          centered
          style={styles.titleContainer}
        >
          <Title style={styles.title}>
            {capitalize(pokemon.name)}
          </Title>
          <Body style={styles.order}>
            {formatPokemonsOrderValue(pokemon.order)}
          </Body>
        </Row>
        <Row>
          {pokemon.types.map(type => (
            <View
              key={type}
              style={styles.typeContainer}
            >
              <Body style={styles.type}>
                {type}
              </Body>
            </View>
          ))}
        </Row>
      </LinearGradient>
      <View style={styles.bottomContentContainer}>
        <Image
          source={{ uri: pokemon.sprite }}
          style={styles.pokemonImage}
        />
        <TabsController
          selectedTabIndex={viewModel.swiperActiveIndex}
          style={styles.tabsController}
        />
        <ScrollView contentContainerStyle={styles.scrollContentStyle}>
        <Swiper
          loop={false}
          showsPagination={false}
          onIndexChanged={viewModel.setSwiperActiveIndex}
        >
          <Tabs.About pokemon={pokemon} />
          <Tabs.BaseStats pokemon={pokemon} />
          <Tabs.Evolution pokemon={pokemon} />
        </Swiper>
        </ScrollView>
      </View>
    </Screen>
  )
})
