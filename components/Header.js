import { AppBar, Toolbar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container } from "@mui/material";
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Link from 'next/link';

const Header = () => {
  
    return (


        <Container maxWidth={'md'} color='text.primary' >
            <Stack direction={'horizontal'}>
            <Link href="/">
                <a>
                        <Typography variant="h5" px={{sm:2}}>Home</Typography>
                </a>
            </Link>
            <Link href="/">
                <a>
                        <Typography variant="h5" px={{sm:2}}>Home</Typography>
                </a>
            </Link>
            <Link href="/">
                <a>
                        <Typography variant="h5" px={{sm:2}}>Home</Typography>
                </a>
            </Link>          
            </Stack>
      
            
        </Container>
       
        );
}

export default Header;