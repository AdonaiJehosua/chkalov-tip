import { createTheme } from "@mui/material/styles"

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: '#F7C40B',
            dark: '#E0B107',
            light: '#FBD547'
        },
        secondary: {
            main: '#964D15',
            dark: '#622E07',
            light: '#CB946B'
        }
    },
    typography: {
        fontFamily: [
          'aFuturaRound',
          'GothamPro',
    ].join(', '),
    h5: {
        fontFamily: [
            'GothamPro',
            'aFuturaRound',
    ].join(', '),
    }
    },
    components: {
        MuiAppBar: {
          styleOverrides: {
            colorPrimary: {
              backgroundColor: "transparent",
              boxShadow: 'none',
            }
          }
        }
      }
})