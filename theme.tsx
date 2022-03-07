import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const fonts = { mono: `'Menlo', monospace` }

const breakpoints = createBreakpoints({
  xs:'320px',
  sm: '768px',
  md: '1368px',
  lg: '1920px',
  xl: '2000px',
})

const theme = extendTheme({
  colors: {
    black: '#16161D',
    black_light:'#505050',
    red: '#d32f2f',
    grey:'#505050',
    grey_light:'#fafafa',
    
    primary:'#5c6bc0',
    light:'#8e99f3',
    dark:'#26418f'

  },
  fonts,
  breakpoints,
  styles: {
    global: {
      body: {
        color:'#16161D'
      }
    }
  },
})

export default theme