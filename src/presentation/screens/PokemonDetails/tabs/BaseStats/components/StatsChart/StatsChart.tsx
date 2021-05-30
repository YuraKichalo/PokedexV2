import React from 'react'
import { View } from 'react-native'
import { StatsChartProps } from './StatsChartProps'
import { styles } from './styles'
import { Body, ChildrenSpacing, Row } from 'presentation/components'
import { capitalize } from 'presentation/utils'
import _ from 'lodash'

const MAX_VALUE = 135

export const StatsChart = (props: StatsChartProps) => {
  const MAX_TOTAL_VALUE = props.stats.length * MAX_VALUE
  const totalStat = _.sumBy(props.stats, 'statValue')

  return (
    <View {...props}>
      <Row centered>
        <View style={styles.titlesContainer}>
          <ChildrenSpacing spacing={15}>
            {props.stats.map((stat, index) => (
              <Body
                key={`title-${index}`}
                style={styles.title}
              >
                {capitalize(stat.statName)}
              </Body>
            ))}
            <Body style={styles.title}>
              Total
            </Body>
          </ChildrenSpacing>
        </View>

        <View style={styles.valuesContainer}>
          <ChildrenSpacing spacing={15}>
            {props.stats.map((stat, index) => (
              <Body
                key={`value-${index}`}
                style={styles.value}
              >
                {stat.statValue}
              </Body>
            ))}
            <Body style={styles.value}>
              {totalStat}
            </Body>
          </ChildrenSpacing>
        </View>

        <View style={styles.indicatorsContainer}>
          <ChildrenSpacing spacing={26}>
            {props.stats.map((stat, index) => (
              <Row
                centered
                key={`indicator-${index}`}
                style={styles.valueIndicatorContainer}
              >
                <View style={[styles.valueIndicator, { backgroundColor: props.barColor, flex: stat.statValue }]} />
                <View style={{ flex: MAX_VALUE - stat.statValue }} />
              </Row>
            ))}
            <Row
              centered
              style={styles.valueIndicatorContainer}
            >
              <View style={[styles.valueIndicator, { backgroundColor: props.barColor, flex: totalStat }]} />
              <View style={{ flex: MAX_TOTAL_VALUE - totalStat }} />
            </Row>
          </ChildrenSpacing>
        </View>
      </Row>
    </View>
  )
}
