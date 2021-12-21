import Header from './Header';
import {Box,Paper,CssBaseline} from "@mui/material"


const Layout = ({children}) => {
    return ( 

            <Box sx={{p:0,m:0, width:'100%', overflow:'hidden'}}>
            {children}
            </Box>
   
     );
}
 
export default Layout;
