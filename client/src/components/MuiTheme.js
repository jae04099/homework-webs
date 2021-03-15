import {createMuiTheme} from '@material-ui/core/styles'

export const MuiLight = createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#cc4444',
      },
      
      background: {
        default: '#f5f5f5',
      },
      titleBar: {
        main: '#eeeeee',
        contrastText: '#222222',
      },
    },
  })

  export const MuiDark = createMuiTheme({
    palette: {
      type: 'dark',
      primary: {
        main: '#26292C',
        light: 'rgb(81, 91, 95)',
        dark: 'rgb(26, 35, 39)',
        contrastText: '#ffffff',
      },
      secondary: {
        main: '#FFB74D',
        light: 'rgb(255, 197, 112)',
        dark: 'rgb(200, 147, 89)',
        contrastText: 'rgba(0, 0, 0, 0.87)',
      },
      titleBar: {
        main: '#555555',
        contrastText: '#ffffff',
      },
      
    },
  })