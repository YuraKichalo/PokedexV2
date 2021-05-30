import React, { useRef, useState } from 'react'
import { useRoute } from '@react-navigation/native'
import { Divider, Header, Screen } from 'presentation/components'
import { styles } from './styles'
import { ScrollView } from 'react-native'
import { NewsViewModel } from './NewsViewModel'
import { NewsItem } from './components/NewsItem'
import { COLORS } from 'presentation/assets'
import { NewsRouteProp } from './NewsRouteProp'

export const News = () => {
  const [viewModel] = useState(() => new NewsViewModel())
  const scrollViewRef = useRef<ScrollView>(null)
  const route = useRoute<NewsRouteProp>()

  return (
    <Screen style={styles.container}>
      <Header />
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        ref={scrollViewRef}
        showsVerticalScrollIndicator={false}
      >
        {/* For some reason if use here <View> or use nothing - content will not scroll */}
        <Screen>
          {viewModel.news.map((newsItem, index) => (
            <React.Fragment key={index}>
              <NewsItem
                imageSource={newsItem.imageSource}
                title={newsItem.title}
                date={newsItem.date}
                text={newsItem.text}
                onLayout={(event => {
                  index === route.params.selectedItemIndex &&
                  scrollViewRef.current?.scrollTo({
                    x: 0,
                    y: event.nativeEvent.layout.y,
                    animated: true
                  })
                })}
              />
              {viewModel.news.length !== index + 1 && (
                <Divider
                  height={2}
                  color={COLORS.darkGray}
                  style={styles.divider}
                />
              )}
            </React.Fragment>
          ))}
        </Screen>
      </ScrollView>
    </Screen>
  )
}
