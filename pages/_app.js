import '../styles/globals.css'
import Layout from '../components/Layout'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import { Container } from '@mui/material'
import { deepOrange,amber,grey } from '@mui/material/colors';

const getDesignTokens = (mode) => (
{
    typography: {
      fontFamily: [
        'Oswald', 'sans-serif'
      ].join(','),
    },
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: amber,
          divider: amber[200],
          text: {
            primary: 'black',
            secondary: grey[800],
          },
        }
      : {
          // palette values for dark mode
          primary: deepOrange,
          divider: deepOrange[700],
          background: {
            default: 'black',
            paper: 'black',
          },
          text: {
            primary: '#60FCF1',
            secondary: grey[500],
          },
        }),
  },
}
);

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);

  const theme = createTheme(

      dark ? getDesignTokens('dark') : getDesignTokens('light')
    
    );

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Container maxWidth={'md'}>
          <Switch checked={dark} onChange={() => setDark(!dark)} color="warning" />
        </Container>

        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
