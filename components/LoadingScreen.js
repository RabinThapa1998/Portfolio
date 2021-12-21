import { useSpring, animated } from 'react-spring';
import {Container , Typography} from '@mui/material'
const LoadingScreen = () => {
    const styles = useSpring({
        loop: { reverse: true },
        from: { x: -200 },
        to: { x: 150 },
        config: { duration: 2000 }
    }
    )
    const styles2 = useSpring({
        from:{opacity:0},
        to:{opacity:1},
        loop: false,
        config: { duration: 1500 },
        delay: 1000
    })

    return (
        <div style={{display:'flex', justifyContent:'center',alignItems:'center', height:'100vh',width:'100vw', backgroundColor:'black', margin:'0', padding:'0'}}>
            <div style={{position:'relative', width:'auto', height:'auto'}} >
            <animated.div
                style={{
                    width: 150,
                    height: 70,
                    backgroundColor: '#60FCF1',
                    borderRadius: 10,


                    position:'absolute',
                    zIndex:'10000',
                    top:'0px',
                   
                    ...styles,

                }}
            />
            <animated.div 
                style={{fontWeight:'500',fontSize:'50px', textAlign:'center', ...styles2}}
            ><Typography variant='h2' sx={{color:'red', fontWeight:'700'}}>RBT</Typography></animated.div>
            </div>
        </div>
    );
}

export default LoadingScreen;