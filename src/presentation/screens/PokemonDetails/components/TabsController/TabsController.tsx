import React from 'react'
import { TabsControllerProps } from './TabsControllerProps'
import { Strings } from 'presentation/assets'
import { Body, Row } from 'presentation/components'
import { styles } from './styles'

export const TabsController = (props: TabsControllerProps) => (
  <Row
    {...props}
    style={[styles.container, props.style]}
  >
    {Strings.pokemonDetails.tabs.map((tabText, index) => {
      const selected = index === props.selectedTabIndex

      return (
        <Body
          key={index}
          style={[
            styles.tab,
            selected && styles.selectedTab
          ]}
        >
          {tabText}
        </Body>
      )
    })}
  </Row>
)
