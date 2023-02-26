import { Layout } from '@/components/layout/layout'
import { CssBaseline, ThemeProvider } from '@mui/material'
import { mainTheme } from '../styles/mainTheme'

export default function App({ Component, pageProps }) {
  return (
    <ThemeProvider theme={mainTheme}>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}
