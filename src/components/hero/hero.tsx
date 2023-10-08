import { Box, Typography } from "@mui/material"
import Image from "next/image";

const Hero = () => {
	
    return(
        <Box width={'100%'} height={'70vh'} sx={{ background: 'red', position: 'relative', width: '100%', height: '70vh'}}>
            <Image src='https://media.graphassets.com/kGql0SBwQLiZUjuF59lJ' alt='bu resm' fill style={{ objectFit: 'cover'}} />

				<Box 
					width={{xs: '100%', md: '70%'}}
					position={'relative'} 
					color={'#2b2d42'} 
					zIndex={999} 
					sx={{top: '50%', paddingLeft: {xs: '10px', md: '50px'}, transform: 'translateY(-50%)'}}
				>
								<Typography fontFamily={'fantasy'} sx={{fontSize: { xs: '30px', md: '50px'}}} variant='h2'>I`am MaftunaB</Typography>
								<Typography fontFamily={'fantasy'} sx={{fontSize: { xs: '30px', md: '50px'}}} variant='h2' >Full Stack Software Developer</Typography>

				</Box>
			
			</Box>
    )
}

export default Hero;