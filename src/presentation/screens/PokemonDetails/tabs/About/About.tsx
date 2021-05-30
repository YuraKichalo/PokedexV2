import React, { useState } from 'react'
import { Image, View } from 'react-native'
import { observer } from 'mobx-react'
import { styles } from './styles'
import { Body, ChildrenSpacing, Icon, Row } from 'presentation/components'
import { COLORS, Images, Strings } from 'presentation/assets'
import { AboutProps } from './AboutProps'
import { AboutViewModel } from './AboutViewModel'
import { capitalize } from 'presentation/utils'

export const About = observer(({ pokemon }: AboutProps) => {
  const [viewModel] = useState(() => new AboutViewModel(pokemon))

  return (
    <View style={styles.container}>
      <Body style={styles.description}>
        Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel.
      </Body>
      <View style={styles.heightAndWeightContainer}>
        <View style={styles.heightContainer}>
          <Body style={styles.measureType}>
            Height
          </Body>
          <Body style={styles.measureValue}>
            {viewModel.pokemon.height * 10} {Strings.units.centimeter}
          </Body>
        </View>
        <View>
          <Body style={styles.measureType}>
            Weight
          </Body>
          <Body style={styles.measureValue}>
            {viewModel.pokemon.weight / 10} {Strings.units.kilogram}
          </Body>
        </View>
      </View>
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.about.breeding}
      </Body>
      <Row style={styles.breedingContent}>
        <View style={styles.breedingSubtitlesContainer}>
          <ChildrenSpacing spacing={13}>
            <Body style={styles.sectionSubtitle}>
              {Strings.pokemonDetails.about.gender}
            </Body>
            <Body style={styles.sectionSubtitle}>
              {Strings.pokemonDetails.about.eggGroups}
            </Body>
            <Body style={styles.sectionSubtitle}>
              {Strings.pokemonDetails.about.color}
            </Body>
          </ChildrenSpacing>
        </View>
        <View>
          <ChildrenSpacing spacing={13}>
            <Row>
              <Row
                centered
                style={styles.maleIconAndValueContainer}
              >
                <Icon
                  size={15}
                  name='male'
                  color={COLORS.blue}
                  style={styles.genderIcon}
                />
                <Body>
                  {viewModel.pokemon.gender.malePercentage}%
                </Body>
              </Row>
              <Row centered>
                <Icon
                  size={15}
                  name='female'
                  color={COLORS.red}
                  style={styles.genderIcon}
                />
                <Body>
                  {100 - viewModel.pokemon.gender.malePercentage}%
                </Body>
              </Row>
            </Row>
            <Row>
              {viewModel.eggGroupsNames.map((name, index) => (
                <Body
                  key={index}
                  style={styles.eggGroupsName}
                >
                  {capitalize(name)}
                </Body>
              ))}
            </Row>
            <Body>
              {capitalize(viewModel.color)}
            </Body>
          </ChildrenSpacing>
        </View>
      </Row>
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.about.location}
      </Body>
      <Image
        source={Images.mockedMap}
        style={styles.map}
      />
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.about.training}
      </Body>
      <Row
        centered
        style={styles.baseExperienceRow}
      >
        <Body style={styles.sectionSubtitle}>
          Base exp
        </Body>
        <Body>
          {viewModel.pokemon.baseExperience}
        </Body>
      </Row>
      <Body style={styles.subtitle}>
        {Strings.pokemonDetails.about.baseInfo}
      </Body>
      <Body>
        Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo. Iusto meliore veritus est an, ex idque etiam cum,
        cu odio vivendo mel. Etiam dicit ea usu, ea eos affert omnium, id eum
        elit oblique urbanitas. Cum recteque appellantur te. His in tollit doctus
        inciderint, ubique mediocrem reformidans his ut. Falli oratio torquatos ne
        duo, qui ei dolor nostrud definitiones. Lorem ipsum dolor sit amet, mel te ocurreret vituperata,
        at his cibo summo.
      </Body>
    </View>
  )
})
