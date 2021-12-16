import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container } from "@mui/material";
import { BG } from '../components/svgfiles';
export default function Home() {
  return (
    <>
      <Head>
        <title>Rabin Bikram Thapa</title>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Container maxWidth={'md'} sx={{ height: '100vh', color: 'text.primary' }} className='container'>
        <Container className='bg layer1 section'>
          <Box color={"common.white"}>
            <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 10, pb: 2, fontSize: '10rem' }}>Hello</Typography>
            <Typography variant='body2' textAlign='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda velit nemo repellendus ratione temporibus maxime, odio in obcaecati consequatur itaque ipsum asperiores dolor eius necessitatibus commodi suscipit! Incidunt dolorum sapiente, dolores quidem dolorem laboriosam veniam officiis corrupti neque ipsam! A ipsam numquam minima officiis deleniti asperiores placeat quas eligendi quod.</Typography>
          </Box>
        </Container>


        <Container  className='bg layer2 layer12 section'>
          <Box color={"common.white"}>
            <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 10, pb: 2, fontSize: '10rem' }}>Hello</Typography>
            <Typography variant='body2' textAlign='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda velit nemo repellendus ratione temporibus maxime, odio in obcaecati consequatur itaque ipsum asperiores dolor eius necessitatibus commodi suscipit! Incidunt dolorum sapiente, dolores quidem dolorem laboriosam veniam officiis corrupti neque ipsam! A ipsam numquam minima officiis deleniti asperiores placeat quas eligendi quod.</Typography>
          </Box>
        </Container>

        <Container  className='bg loop section'>
          <Box color={"common.white"}>
            <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 10, pb: 2, fontSize: '10rem' }}>Hello</Typography>
            <Typography variant='body2' textAlign='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda velit nemo repellendus ratione temporibus maxime, odio in obcaecati consequatur itaque ipsum asperiores dolor eius necessitatibus commodi suscipit! Incidunt dolorum sapiente, dolores quidem dolorem laboriosam veniam officiis corrupti neque ipsam! A ipsam numquam minima officiis deleniti asperiores placeat quas eligendi quod.</Typography>
          </Box>
        </Container>
      </Container>

    </>
  )
}
