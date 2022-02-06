import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import { AppBar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container, Button, Hidden } from "@mui/material";
import { BG } from '../components/svgfiles';
import { useSpring, animated } from 'react-spring';
import { useState } from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay, EffectFade, EffectCards } from 'swiper';
import DownloadIcon from '@mui/icons-material/Download';
import data from '../db.json';
export default function Home() {
  const size = 30
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

      <Container sx={{ width: '100vw', p: 0 }} className='parent' >
        <Container color='text.primary' sx={{ position: 'absolute', top: '10', p: 0, m: 0, zIndex: 1000, width: '100%' }}>
          <Box sx={{ width: '100%', m: 0, p: 0 }}>
            <Stack direction={'horizontal'} >
              <Link href="#home">
                <a className='linkhover'>
                  <Typography variant="h5" px={{ xs: 2 }} >Home</Typography>
                </a>
              </Link>
              <Link href="#about">
                <a className='linkhover'>
                  <Typography variant="h5" px={{ xs: 2 }} >About</Typography>
                </a>
              </Link>
              <Link href="#resume">
                <a className='linkhover'>
                  <Typography variant="h5" px={{ xs: 2 }} >Resume</Typography>
                </a>
              </Link>
              <Link href="#services">
                <a className='linkhover'>
                  <Typography variant="h5" px={{ xs: 2 }} >Services</Typography>
                </a>
              </Link>
            </Stack>
          </Box>
        </Container>

        <Container maxWidth={'lg'} sx={{ height: '100vh', color: 'text.primary', position: 'relative', p: 0 }} className='container'>


          <Container className='bg layer1 section' id="home" sx={{ p: 0, m: 0 }}>
            <Box color={"common.white"} >
              <Stack direction="row" spacing={2} sx={{ justifyContent: 'center' }}>
                {/* <Typography variant='h2' sx={{ fontWeight: '700', alignSelf: 'center', p: 0, m: 0, color: '#ccc' }} className='headingfontsize'>rabin</Typography> */}
                <Avatar alt="Rabin Thapa" src="/img/pp.jpg" sx={{ width: 170, height: 170, alignSelf: 'center', mt: 15 }} />
              </Stack>
              <Typography variant="h5" sx={{ textAlign: 'center', fontWeight: '500', color: '#ccc' }}>An IT Enthusiast</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center', pt: 5 }} color='#fdfdfd'>"It's never too late, It's never too early"</Typography>
            </Box>
            <Stack direction={'row'} spacing={{ lg: 3, xs: 1 }} sx={{ color: '#899499', justifyContent: 'center', alignItems: 'end', mt: 1, p: 1, fontSize: '.9rem' }} divider={<Divider orientation="vertical" flexItem variant='middle' />}>
              <Typography variant='h6'>CODING</Typography>
              <Typography variant='h6'>PHOTOGRAPHY</Typography>
              <Typography variant='h6'>STOCK MARKET</Typography>
              <Typography variant='h6'>SINGING</Typography>
              <Typography variant='h6'>ART</Typography>
            </Stack>

            <Stack direction={'row'} spacing={4} sx={{ color: '#ccc', justifyContent: 'center', alignItems: 'end', mt: 8 }} >
              <Box>
                <a href="https://www.instagram.com/rabin.bikram.thapa/" target="_blank" >
                  <Avatar alt="html" src="/img/instagram.png" sx={{ width: 50, height: 50, alignSelf: 'center' }} variant="square" className='invert' />
                </a>
              </Box>
              <Box >
                <a href="https://www.facebook.com/rabin.thapa.3979489" target="_blank">
                  <Avatar alt="html" src="/img/facebook.png" sx={{ width: 50, height: 50, alignSelf: 'center' }} variant="square" className='invert' />
                </a>
              </Box>
              <Box >
                <a href="https://github.com/RabinThapa1998" target="_blank">
                  <Avatar alt="html" src="/img/github.png" sx={{ width: 50, height: 50, alignSelf: 'center' }} variant="square" className='invert' />
                </a>
              </Box>
              <Box >
                <a href="https://twitter.com/imrabin1998" target="_blank">
                  <Avatar alt="html" src="/img/twitter.png" sx={{ width: 50, height: 50, alignSelf: 'center' }} variant="square" className='invert' />
                </a>
              </Box>

            </Stack>
          </Container>


          <Container className='bg  layer12 section' id='about' >
            <Box color={"common.white"}>
              <Typography variant='h2' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 12, color: '#ccc' }} className='headingfontsize'>About</Typography>
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
              <Typography variant='h2' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 0, color: '#ccc' }} className='headingfontsize'>Resume</Typography>
            </Box>
            <Box>
              <Typography variant='h4' sx={{ fontWeight: 400, pb: 3, textAlign: 'center', color: 'text.secondary' }}> <ins>Project Experiences</ins> </Typography>
              {/* <Stack direction={'column'} sx={{ alignItems: 'left', color: '#ccc' }} >
                <Stack direction={'row'} spacing={{ lg: 3, xs: 1 }} sx={{ color: '#ccc' }} divider={<Divider orientation="vertical" flexItem variant='middle' />}>
                  <Typography variant='h5' sx={{ fontWeight: 400 }}>Front End</Typography>
                  <Typography variant='h6' sx={{ fontWeight: 200 }}>TELEMEDICINE
                    <a href="https://rural-telemedicine.herokuapp.com/" target="_blank"> (rural-telemedicine.herokuapp.com)</a><br />React JS, Bootstrap
                  </Typography>
                  <Typography variant='h6' sx={{ fontWeight: 200 }}>MORANG HOSPITAL
                    <a href="https://moranghospital.netlify.app" target="_blank"> (moranghospital.netlify.app)</a> <br />Next JS, Material UI</Typography>
                  <Typography variant='h6' sx={{ fontWeight: 200 }}>PERSONAL WEBSITE
                    <a href="https://rabinbikramthapa.netlify.app/" target="_blank"> (rabinbikramthapa.netlify.app)</a> <br />Next JS, Material UI</Typography>

                </Stack>
                <Stack direction={'row'} spacing={{ lg: 3, xs: 1 }} sx={{ color: '#ccc', pt: 2 }} divider={<Divider orientation="vertical" flexItem variant='middle' />}>
                  <Typography variant='h5' sx={{ fontWeight: 400 }} >Major Project</Typography>
                  <Typography variant='h6' sx={{ fontWeight: 200 }}>Suspicious Human Activity Detection<br />
                    <a href="https://github.com/RabinThapa1998/Action-Recognition-Major-project-" target="_blank"> (Action-Recognition-Major-project)</a><br />Deep Learning, Pytorch, Python ,2D-CNN, 3D-CDD, YOLO v5, SQlite
                  </Typography>

                </Stack>
                <Stack direction={'row'} spacing={{ lg: 3, xs: 1 }} sx={{ color: '#ccc', pt: 2 }} divider={<Divider orientation="vertical" flexItem variant='middle' />}>
                  <Typography variant='h5' sx={{ fontWeight: 400 }} >Minor Project</Typography>
                  <Typography variant='h6' sx={{ fontWeight: 200 }}>Mero Wallet(Expense tracking app) <br />
                    <a href="https://github.com/RabinThapa1998/MeroWallet-Minor1" target="_blank"> (Mero Wallet)</a><br />Android Studio, Java, SQlite
                  </Typography>


                </Stack>
              </Stack> */}
            </Box>
            <Box sx={{ pt: 5 }}>
              <Swiper
                // install Swiper modules
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView="1"
                navigation
                // pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}

                breakpoints={
                  { // when window width is >= 320px
                    425: {
                      slidesPerView: 1,
                      spaceBetween: 20
                    },
                    650: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    // when window width is >= 640px
                    768: {
                      slidesPerView: 3,
                      spaceBetween: 10
                    }
                  }
                }
              >

                {data.projects.map(eachdata => {
                  return (
                    <SwiperSlide >
                      <Paper elevation={0} className='slides' sx={{ textAlign: 'center' }}>
                        <Typography variant='h6' sx={{ fontWeight: 200 }}>{eachdata.pname}<br />
                          <a href={eachdata.link} target="_blank" className='linkhover' >{eachdata.linkname}</a><br />{eachdata.tech}</Typography>
                      </Paper>
                    </SwiperSlide>
                  )
                })}

              </Swiper>
            </Box>



          </Container>
          <Container className='bg section' id='services'>
            <Box>
              <Typography variant='h2' sx={{ fontWeight: '700', textAlign: 'center', pt: 3, pb: 0, color: '#ccc' }} className='headingfontsize'>Services</Typography>
              <Typography variant='h5' sx={{ textAlign: 'center', pb: 2 }} color='text.secondary'>You can hire me for the following works.</Typography>
            </Box>
            <Box>
              <Stack direction={'column'} spacing={1} sx={{ color: '#ccc', justifyContent: 'center' }} >
                <Stack direction={'column'} spacing={1} sx={{ color: '#ccc', justifyContent: 'center' }} >
                  <Typography variant='h4' sx={{ fontWeight: 500, textAlign: 'center' }}>REACT js ,NEXT js ,Material UI, Bootstrap, SQL, NO-SQL</Typography>

                </Stack>
                <Stack direction={'row'} spacing={2} sx={{ color: '#ccc', justifyContent: 'center', pt: 3 }} >
                  <Box >
                    <Avatar alt="html" src="/img/html.png" sx={{ width: size, height: size, alignSelf: 'center' }} variant="square" />
                  </Box>
                  <Box >
                    <Avatar alt="html" src="/img/css.png" sx={{ width: size, height: size, alignSelf: 'center' }} variant="square" />
                  </Box>
                  <Box >
                    <Avatar alt="html" src="/img/react.png" sx={{ width: size, height: size, alignSelf: 'center' }} variant="square" />
                  </Box>
                  <Box >
                    <Avatar alt="html" src="/img/nextjs.png" sx={{ width: size, height: size, alignSelf: 'center' }} className='invert' variant="square" />
                  </Box>


                </Stack>
              </Stack>
            </Box>

            <Stack direction={'column'} sx={{ mt: 10 }}>
              <Box sx={{ display: 'flex ', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <a href="/cv.pdf" target='_blank' rel="noopener noreferrer" className='linkhover' > 
                  <Stack direction='row' spacing={0} sx={{justifyContent:'center',alignItems:'center'}}>
                    <Typography variant='h5' sx={{ fontWeight: '500', textAlign: 'center' }} >Download CV</Typography>
                    <DownloadIcon></DownloadIcon>
                  </Stack>
                </a>
              </Box>
              <Box>
                <Typography variant='body1' sx={{ fontWeight: '200', textAlign: 'center', mt: 2, pb: 1, color: '#ccc', fontSize: '2rem' }}>MAIL AT <br /> <a href="mailto:  rabinthapa.rbt@gmail.com" className='linkhover'> rabinthapa.rbt@gmail.com</a>
                </Typography>
              </Box>
            </Stack>

          </Container>
        </Container>
      </Container>

    </>
  )
}
