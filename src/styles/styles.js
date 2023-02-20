import { createTheme } from "@mui/material/styles"
// import RalewayTtf from "/fonts/Raleway-Regular.ttf"

const raleway = {
    fontFamily: 'Raleway',
    fontStyle: 'normal',
    fontDisplay: 'swap',
    fontWeight: 400,
    src: `
      local('Raleway'),
      local('Raleway-Regular'),
      url("/fonts/Raleway-Regular.ttf") format('truetype')
    `,
  };

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
        fontFamily: ['Raleway', 'Arial'].join(',')
    },
    components: {
        MuiCssBaseline: {
            '@global': {
                '@font-face': [raleway]
            }
        }
    }
})