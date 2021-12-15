import { AppBar, Toolbar, Typography, Box, CssBaseline, Grid, Paper, Item, Card, CardContent, Divider, Avatar, Stack, Container } from "@mui/material";
import Switch from '@mui/material/Switch';
import { createTheme, ThemeProvider } from "@mui/material/styles";

const Header = () => {
  
    return (


        <Container maxWidth={'md'} color='text.primary' >
            <Stack direction={'horizontal'}>
                        <Typography variant="h5" px={{sm:2}}>Home</Typography>
                        <Typography variant="h5" px={{sm:2}}>blah</Typography>
                        <Typography variant="h5" px={{sm:2}}>blah blah</Typography>
            </Stack>
      
            
        </Container>
       
        );
}

export default Header;