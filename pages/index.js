import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container, Button, Hidden } from "@mui/material";
import { BG } from '../components/svgfiles';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import Link from 'next/link';


export default function Home() {
  const [cancel, setCancel] = useState(false)
  const style = useSpring({
    to: { x: 100 },
    from: { x: 0 },
    loop: { reverse: true },
    cancel: cancel,
    config: { duration: 2000 }
  })
  return (
    <>
      <Head>
        <title>Rabin Bikram Thapa</title>
        <link href="https://fonts.googleapis.com/css2?family=Oswald:wght@200;300;400;500;600;700&display=swap" rel="stylesheet" />
      </Head>

      <Container>
        <Container color='text.primary' sx={{ position: 'absolute', top: '10', p: 0, m: 0, zIndex: 1000, width: '100vw' }}>
          <Box sx={{ width: '100%' }}>
            <Stack direction={'horizontal'} >
              <Link href="#home">
                <a>
                  <Typography variant="h5" px={{ xs: 2 }} sx={{ color: 'white' }} >Home</Typography>
                </a>
              </Link>
              <Link href="#about">
                <a>
                  <Typography variant="h5" px={{ xs: 2 }} sx={{ color: 'white' }}>About</Typography>
                </a>
              </Link>
              <Link href="#resume">
                <a>
                  <Typography variant="h5" px={{ xs: 2 }} sx={{ color: 'white' }}>Resume</Typography>
                </a>
              </Link>
              <Link href="#services">
                <a>
                  <Typography variant="h5" px={{ xs: 2 }} sx={{ color: 'white' }}>Services</Typography>
                </a>
              </Link>
            </Stack>
          </Box>
        </Container>

        <Container maxWidth={'lg'} sx={{ height: '100vh', color: 'text.primary', position: 'relative', p: 0 }} className='container'>


          <Container className='bg layer1 section' id="home" >
            <Box color={"common.white"} sx={{ mt: 20 }}>
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                <Typography component='h1' variant='h1' sx={{ fontWeight: '700', alignSelf: 'center', p: 0, m: 0, fontSize: '7rem', color: '#ccc' }}>rabin</Typography>
                <Avatar alt="Rabin Thapa" src="/img/pp.jpg" sx={{ width: 150, height: 150, alignSelf: 'center' }} />
              </Stack>
              <Typography component='h3' variant="h3" sx={{ textAlign: 'center', fontWeight: '500', color: '#ccc' }}>An IT Enthusiast</Typography>
            </Box>
          </Container>


          <Container className='bg  layer12 section' id='about' >
            <Box color={"common.white"}>
              <Typography variant='h2' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 12, fontSize: '7rem', color: '#ccc' }}>About</Typography>
              {/* <Typography variant='h2' textAlign='center'>I am a Computer Engineering Graduate.</Typography>
            <Typography variant='h4' textAlign='center'>.</Typography> */}
              <Stack direction={'row'} sx={{ justifyContent: 'space-around', color: '#ccc' }} divider={<Divider orientation="vertical" flexItem variant='middle' />}>
                <Stack direction={'column'} spacing={2}>
                  <Typography variant='h3' sx={{ fontWeight: 400 }} color={'text.primary'}>PROFILE</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>FULLNAME: <br></br>RABIN THAPA</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>JOB: <br></br>FREELANCER</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>WEBSITE: <br></br>rabinbikramthapa.netlify.app</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>EMAIL: <br></br>rabinthapa.rbt@gmail.com</Typography>
                </Stack>
                <Stack direction={'column'} spacing={1}>
                  <Typography variant="h3" sx={{ fontWeight: 400 }} color={'text.primary'}>Skills</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- HTML</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- CSS</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- REACT JS</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- NEXT JS</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- MATERIAL UI</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- BOOTSTRAP</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>- GIT HUB</Typography>
                </Stack>
              </Stack>
            </Box>
          </Container>

          <Container className='bg loop section resumebg' id='resume'>
            <Box>
              <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 0, fontSize: '7rem', color: '#ccc' }}>Resume</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center', pb: 2 }} color='text.secondary'>I've worked in several platform during my Engineering. <br /> These experiences helped me improve the problem solving abilities and team work capabilities</Typography>
            </Box>
            <Box>
              <Typography variant='h4' sx={{ fontWeight: 400, pb: 2, textAlign: 'center', color: '#ccc' }}> <ins>Project Experiences</ins> </Typography>
              <Stack direction={'row'} sx={{ justifyContent: 'space-around', color: '#ccc' }} divider={<Divider orientation="vertical" flexItem variant='middle' />}>
                <Stack direction={'column'} spacing={1} sx={{ color: '#ccc' }} >
                  <Typography variant='h4' sx={{ fontWeight: 400 }}>Front End</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>TELEMEDICINE
                    <a href="https://rural-telemedicine.herokuapp.com/" target="_blank"> (rural-telemedicine.herokuapp.com)</a><br />&nbsp;&nbsp;React JS, Bootstrap
                  </Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>MORANG HOSPITAL
                    <a href="https://moranghospital.netlify.app" target="_blank"> (moranghospital.netlify.app)</a> <br />&nbsp;&nbsp;Next JS, Material UI</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>PERSONAL WEBSITE
                    <a href="https://rabinbikramthapa.netlify.app/" target="_blank"> (rabinbikramthapa.netlify.app)</a> <br />&nbsp;&nbsp;Next JS, Material UI</Typography>

                </Stack>
                <Stack direction={'column'} spacing={1} sx={{ color: '#ccc' }} >
                  <Typography variant='h4' sx={{ fontWeight: 400 }} >Major Project</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>Suspicious Human Activity Detection<br />
                    <a href="https://github.com/RabinThapa1998/Action-Recognition-Major-project-" target="_blank"> (Action-Recognition-Major-project)</a><br />&nbsp;&nbsp;Deep Learning, Pytorch, Python ,2D-CNN, 3D-CDD, YOLO v5, SQlite
                  </Typography>

                </Stack>
                <Stack direction={'column'} spacing={1} sx={{ color: '#ccc' }} >
                  <Typography variant='h4' sx={{ fontWeight: 400 }} >Minor Project</Typography>
                  <Typography variant='h5' sx={{ fontWeight: 200 }}>Mero Wallet(Expense tracking app) <br />
                    <a href="https://github.com/RabinThapa1998/MeroWallet-Minor1" target="_blank"> (Mero Wallet)</a><br />&nbsp;&nbsp;Android Studio, Java, SQlite
                  </Typography>


                </Stack>
              </Stack>
            </Box>
          </Container>
          <Container className='bg section' id='services'>
            <Box>
              <Typography variant='h1' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 0, fontSize: '7rem', color: '#ccc' }}>Services</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center', pb: 2 }} color='text.secondary'>You can hire me for the following works.</Typography>
            </Box>
            <Box>
              <Stack direction={'row'} spacing={1} sx={{ color: '#ccc', justifyContent: 'center' }} >
                <Stack direction={'column'} spacing={1} sx={{ color: '#ccc', justifyContent: 'center' }} >
                  <Typography variant='h4' sx={{ fontWeight: 400, textAlign: 'center' }}>Front End</Typography>
                  <Typography variant='h4' sx={{ fontWeight: 500 }}>REACT js ,NEXT js ,Material UI, Bootstrap</Typography>
                </Stack>
              </Stack>
            </Box>
            <Stack direction={'column'} sx={{mt:10}}>
            <Typography variant='h3' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 0, color: '#ccc' }}>Contacts</Typography> 
            <Typography variant='h5' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 0, fontSize: '2rem', color: '#ccc' }}>Gmail <br /> rabinthapa.rbt@gmail.com</Typography> 


            </Stack>
          </Container>
        </Container>
      </Container>

    </>
  )
}
