import { AppBar, Toolbar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container } from "@mui/material";
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from "@mui/material/styles";
// import ScrollLink from 'next/ScrollLink';
import { Link, animateScroll as scroll } from "react-scroll";

const Header = () => {

    return (
        <Container maxWidth={'lg'} color='text.primary' sx={{ position: 'absolute', top: '0'}}>
            <Stack direction={'horizontal'}>
                <Link to="home" smooth={true}>
                    <Typography variant="h5" px={{ sm: 2 }} >Home</Typography>
                </Link>
                <Link to="about" smooth={true}>
                    <Typography variant="h5" px={{ sm: 2 }}>About</Typography>
                </Link>
                <Link to="resume" smooth={true}>
                    <Typography variant="h5" px={{ sm: 2 }}>Resume</Typography>
                </Link>
                <Link to="services" smooth={true}>
                    <Typography variant="h5" px={{ sm: 2 }}>Services</Typography>
                </Link>
            </Stack>
        </Container>

    );
}

export default Header;