import { extendTheme } from '@citric/core'

const theme = extendTheme({
  globalStyle: {
    html: {
      cursor: 'default',
      backgroundColor: 'light.400',
      color: 'light.contrastText',
      fill: 'currentColor',
    },
    body: {
      '::-webkit-scrollbar': {
        width: '0.5rem',
      },
      '::-webkit-scrollbar-track' : {
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)'
      },
      
      '::-webkit-scrollbar-thumb' : {
        backgroundColor: 'primary'
      }
    } as any,
  },
  colorScheme: {
    light: {
      700: '#A9A9AC',
      600: '#48484A',
      500: '#3A3A3C',
      400: '#2C2C2E',
      300: '#1C1C1E',
      contrastText: '#DCDCDE',
    },
    inverse: {
      700: '#707075',
      600: '#B3B3B8',
      500: '#F2F2F7',
      400: '#FAFAFC',
      300: '#FFFFFF',
      contrastText: '#1C1C1E',
    },
    highlight: {
      700: '#041433',
      600: '#07245C',
      500: '#1463FF',
      400: '#AAC7FF',
      300: '#D0E0FF',
      contrastText: '#FFFFFF',
    },
  }
})

export default theme