import { COLORS } from 'presentation/assets'

export const useThemeColor = (color: string) => {
  switch (color) {
    case 'primary':
      return COLORS.primary
    case 'secondary':
      return COLORS.secondary
    case 'blue':
      return COLORS.blue
    case 'brown':
      return COLORS.brown
    case 'green':
      return COLORS.green
    case 'purple':
      return COLORS.purple
    case 'red':
      return COLORS.red
    case 'yellow':
      return COLORS.yellow
  }
}
