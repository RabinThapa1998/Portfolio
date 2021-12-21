import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container, Button } from "@mui/material";
import { BG } from '../components/svgfiles';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import  Link   from 'next/link';

export default function Home() {
  const [cancel, setCancel] = useState(false)
  const style = useSpring({
    to: { x: 100 },
    from: { x: 0 },
    loop: {reverse:true},
    cancel: cancel,
    config: { duration: 2000 }
  })
  return (
    <>
      <Head>
        <title>Rabin Bikram Thapa</title>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Container maxWidth={'lg'} sx={{ height: '100vh', color: 'text.primary' }} className='container'>
        <Container maxWidth={'md'} color='text.primary' sx={{ position: 'absolute', top: '0' }}>
          <Stack direction={'horizontal'}>
            <Link href="#home">
             <a>

             <Typography variant="h5" px={{ sm: 2 }} >Home</Typography>
             </a> 
            </Link>
            <Link href="#about">
            <a>

              <Typography variant="h5" px={{ sm: 2 }}>About</Typography>
            </a>
            </Link>
            <Link href="#resume">
            <a>

              <Typography variant="h5" px={{ sm: 2 }}>Resume</Typography>
            </a>
            </Link>
            <Link href="#services">
            <a>
              
              <Typography variant="h5" px={{ sm: 2 }}>Services</Typography>
            </a>
            </Link>
          </Stack>
        </Container>

        <Container className='bg layer1 section' id="home">
          <Box color={"common.white"}>
            <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 10, pb: 2, fontSize: '10rem' }}>rabin</Typography>
            <Typography variant='body2' textAlign='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda velit nemo repellendus ratione temporibus maxime, odio in obcaecati consequatur itaque ipsum asperiores dolor eius necessitatibus commodi suscipit! Incidunt dolorum sapiente, dolores quidem dolorem laboriosam veniam officiis corrupti neque ipsam! A ipsam numquam minima officiis deleniti asperiores placeat quas eligendi quod.</Typography>
          </Box>
        </Container>


        <Container className='bg layer2 layer12 section' id='about'>
          <Box color={"common.white"}>
            <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 10, pb: 2, fontSize: '10rem' }}>About</Typography>
            <Typography variant='body2' textAlign='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda velit nemo repellendus ratione temporibus maxime, odio in obcaecati consequatur itaque ipsum asperiores dolor eius necessitatibus commodi suscipit! Incidunt dolorum sapiente, dolores quidem dolorem laboriosam veniam officiis corrupti neque ipsam! A ipsam numquam minima officiis deleniti asperiores placeat quas eligendi quod.</Typography>
          </Box>
        </Container>

        <Container className='bg loop section' id='resume'>
          <Box color={"common.white"}>
            <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 10, pb: 2, fontSize: '10rem' }}>Resume</Typography>
            <Typography variant='body2' textAlign='center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda velit nemo repellendus ratione temporibus maxime, odio in obcaecati consequatur itaque ipsum asperiores dolor eius necessitatibus commodi suscipit! Incidunt dolorum sapiente, dolores quidem dolorem laboriosam veniam officiis corrupti neque ipsam! A ipsam numquam minima officiis deleniti asperiores placeat quas eligendi quod.</Typography>
          </Box>
        </Container>
        <Container className='bg section' id='services'>
          <Paper>
            <Typography variant='h2'>Services</Typography>
            <animated.div style={style}>I will fade in</animated.div>
            <Button variant={'outlined'} onClick={() => { setCancel(!cancel) }}>click href t#oggle</Button>
          </Paper>
        </Container>
      </Container>

    </>
  )
}
