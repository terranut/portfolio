import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools';
import "@fontsource/smooch-sans"
import "@fontsource/poppins";


const fonts = { mono: `'Menlo', monospace`,smoch:"Smooch Sans",poppins:'Poppins, sans-serif',  }

const breakpoints = createBreakpoints({
  xs:'320px',
  sm: '768px',
  md: '1368px',
  lg: '1920px',
  xl: '2000px',
})

const theme = extendTheme({
  colors: {
    black:{
      900:' #121212',
      700: '#1e1e1f',
      300:'#2b2b2c',
      200: '#383838',
      100: '#a2a2a2'
      
    } ,
    blackAlpha:{
      300:'#2b2b2cbf',
    },
    gray:{
      800:"#363636",
      100:'#d6d6d6',
    },
    grayAlpha:{
      100:'#d6d6d6b3'
    },
    white:'#fafafa',

    yellow:'#fdcf69',
    
    
  },
  fonts,
  breakpoints,
  styles: {
    global: {
      body: {
        color:'white',
        background: "black.900"
      }
    }
  },
})

export default theme