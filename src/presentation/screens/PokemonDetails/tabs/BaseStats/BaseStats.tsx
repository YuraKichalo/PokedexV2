import React from 'react'
import { View } from 'react-native'
import { styles } from './styles'
import { BaseStatsProps } from './BaseStatsProps'
import { StatsChart } from './components/StatsChart'
import { getTypeColor } from 'presentation/utils'
import { Body } from 'presentation/components'
import { Strings } from 'presentation/assets'

export const BaseStats = ({ pokemon }: BaseStatsProps) => (
  <View style={styles.container}>
    <StatsChart
      stats={pokemon.stats}
      barColor={getTypeColor(pokemon.types[0])!}
    />
    <Body style={styles.subtitle}>
      {Strings.pokemonDetails.baseStats.typeDefenses}
    </Body>
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
