import Header from './Header';
import {Box,Paper,CssBaseline} from "@mui/material"


const Layout = ({children}) => {
    return ( 
        <Paper elevation={0}>
        <CssBaseline/>
            <Header/>
            <Box sx={{mt:0}}>
            {children}
            </Box>
        </Paper>

     );
}
 
export default Layout;
