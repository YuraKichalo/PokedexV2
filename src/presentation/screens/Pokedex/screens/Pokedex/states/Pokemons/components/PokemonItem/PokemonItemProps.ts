import { TouchableOpacityProps } from 'react-native'

export interface PokemonItemProps extends TouchableOpacityProps {
 name: string
 types: string[]
 sprite: string
}
