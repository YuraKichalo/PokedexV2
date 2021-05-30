import React, { useState } from 'react'
import { View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'
import { Body, Divider } from 'presentation/components'
import { COLORS, Strings } from 'presentation/assets'
import { EvolutionProps } from './EvolutionProps'
import { EvolutionRow } from './components'
import { observer } from 'mobx-react'
import { EvolutionViewModel } from './EvolutionViewModel'
import { EvolutionNavigationProp } from './EvolutionNavigationProp'
import { EvolutionRouter } from './EvolutionRouter'

export const Evolution = observer(({ pokemon }: EvolutionProps) => {
  const [viewModel] = useState(() => new EvolutionViewModel(pokemon))
  const navigation = useNavigation<EvolutionNavigationProp>()
  const [router] = useState(() => new EvolutionRouter(navigation))

  return (
    <View style={styles.container}>
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.evolution.chain} #{viewModel.evolutionChainId}
      </Body>
      <EvolutionRow
        currentPokemon={pokemon}
        evolveFromPokemon={viewModel.pokemonFirstEvolution!}
        evolveToPokemon={viewModel.pokemonSecondEvolution!}
        onPokemonImagePress={router.navigateToPokemonDetails}
        level={viewModel.firstEvolutionTriggeringLevel ?? Strings.pokemonDetails.evolution.unknownLevel}
      />
      <Divider
        height={1}
        color={COLORS.gray}
        style={styles.divider}
      />
      <EvolutionRow
        currentPokemon={pokemon}
        evolveFromPokemon={viewModel.pokemonSecondEvolution!}
        evolveToPokemon={viewModel.pokemonThirdEvolution!}
        onPokemonImagePress={router.navigateToPokemonDetails}
        level={viewModel.secondEvolutionTriggeringLevel ?? Strings.pokemonDetails.evolution.unknownLevel}
        style={styles.bottomEvolutionRow}
      />
      <Body>
        Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te.
      </Body>
    </View>
  )
})
