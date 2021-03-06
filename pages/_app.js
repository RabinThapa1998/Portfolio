import '../styles/globals.css'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "swiper/css/effect-fade";
import "swiper/css/effect-cards";
import Layout from '../components/Layout'
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Switch from '@mui/material/Switch';
import { Container } from '@mui/material'
import { deepOrange, amber, grey } from '@mui/material/colors';
import LoadingScreen from '../components/LoadingScreen';

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
            primary: '#000',
            secondary: grey[800],
          },
        }
        : {
          // palette values for dark mode
          primary: deepOrange,
          divider: '#60FCF1',
          background: {
            default: '#000',
            paper: '#000',
          },
          text: {
            primary: '#60FCF1',
            secondary: "#C62368",
          },
        }),
    },
  }
);

function MyApp({ Component, pageProps }) {
  const [dark, setDark] = useState(false);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000)
  }, [])

  const theme = createTheme(
    dark ? getDesignTokens('light') : getDesignTokens('dark')
  );
  return (
    <ThemeProvider theme={theme}>
      {
        loading ? <LoadingScreen /> : <Layout><Component {...pageProps} /></Layout>

      }
    </ThemeProvider>
  )
}

export default MyApp

{/* <Container maxWidth={'lg'}>
      <Switch checked={dark} onChange={() => setDark(!dark)} color="warning" />
    </Container> */}