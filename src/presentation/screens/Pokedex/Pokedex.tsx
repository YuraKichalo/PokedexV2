import React, { useState } from 'react'
import { Dimensions } from 'react-native'
import { CardStyleInterpolators, createStackNavigator, StackCardInterpolationProps } from '@react-navigation/stack'
import { useNavigation } from '@react-navigation/native'
import { observer } from 'mobx-react'
import { PokedexViewModel } from './PokedexViewModel'
import { PokedexStackParamsList } from './PokedexStackParamsList'
import * as Screens from './screens'
import { PokedexRoutes } from './PokedexRoutes'
import { PokedexNavigationProp } from './PokedexNavigationProp'
import { PokedexRouter } from './PokedexRouter'

const Stack = createStackNavigator<PokedexStackParamsList>()

export const Pokedex = observer(() => {
  const navigation = useNavigation<PokedexNavigationProp>()
  const [router] = useState(() => new PokedexRouter(navigation))
  const [viewModel] = useState(() => new PokedexViewModel())

  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      mode='modal'
    >
      <Stack.Screen name={PokedexRoutes.Pokedex}>
        {() => (
          <Screens.Pokedex
            viewModel={viewModel}
            router={router}
          />
        )}
      </Stack.Screen>
      <Stack.Screen
        name={PokedexRoutes.MenuModal}
        options={{
          gestureEnabled: true,
          cardShadowEnabled: true,
          cardOverlayEnabled: true,
          gestureResponseDistance: {
            vertical: Dimensions.get('screen').height
          },
          cardStyle: {
            backgroundColor: 'transparent'
          },
          cardStyleInterpolator: (props: StackCardInterpolationProps) => ({
            ...CardStyleInterpolators.forVerticalIOS(props),
            overlayStyle: {
              opacity: props.current.progress.interpolate({
                inputRange: [0, 0.36, 1],
                outputRange: [0, 0.3, 0.3]
              })
            }
          })
        }}
      >
        {() => <Screens.MenuModal router={router} />}
      </Stack.Screen>
    </Stack.Navigator>
  )
})
