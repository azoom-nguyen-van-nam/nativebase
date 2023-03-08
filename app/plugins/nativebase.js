import { extendTheme } from 'native-base'

const theme = extendTheme({
  colors: {
    primary: {
      900: '#356290',
      600: '#1784B2',
      300: '#50BFC3'
    },
    onPrimary: '#fff',
    background: '#eee',
    white: '#fff',
    border: '#ccc'
  },
  fonts: {
    heading: 'Roboto',
    screen: 'Roboto',
    mono: 'Roboto'
  },
  components: {
    Button: {
      baseStyle: {
        rounded: 'md'
      }
    },
    Text: {
      baseStyle: {
        color: 'emerald.400'
      },
      defaultProps: {
        size: 'lg'
      },
      sizes: {
        xl: {
          fontSize: '64px'
        },
        lg: {
          fontSize: '32px'
        },
        md: {
          fontSize: '16px'
        },
        sm: {
          fontSize: '12px'
        }
      }
    }
  }
})

export { theme }
