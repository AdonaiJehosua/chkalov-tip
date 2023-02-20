import { CssBaseline, ThemeProvider } from '@mui/material'
import { mainTheme } from '../styles/styles'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
