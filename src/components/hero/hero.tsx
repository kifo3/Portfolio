import { Avatar, Box, Typography } from "@mui/material";

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Image from "next/image";
// import { format } from "date-fns";
import { HeroProps } from "./hero.props";
import { Bolt } from "@mui/icons-material";
// import { calculateEstimatedTimeToRead } from "@/src/helpers/time.format";

const Hero = ({heros}: HeroProps) => {
	
    return(
        <Box width={'100%'} height={'70vh'} sx={{ background: 'red', position: 'relative', width: '100%', height: '70vh'}}>
            <Image src="https://media.graphassets.com/kGql0SBwQLiZUjuF59lJ" alt="bg rasm" fill style={{ objectFit: 'cover'}} />

				<Box 
					width={{xs: '100%', md: '70%'}}
					position={'relative'} 
					color={"#2b2d42"} 
					zIndex={999} 
					sx={{top: '50%', paddingLeft: {xs: '10px', md: '50px'}, transform: 'translateY(-50%)'}}
				>
								<Typography sx={{fontSize: { xs: '30px', md: '50px'}}} variant="h2">I'am MaftunaB</Typography>
								<Typography sx={{fontSize: { xs: '30px', md: '50px'}}} variant="h2" >Full Stack Software Developer</Typography>

				</Box>
			
			</Box>
    )
}

export default Hero;

{/* <Carousel responsive={{
				mobile: {
					breakpoint: { max: 4000, min: 0 },
					items: 1
				  }
			}}>
				{heros.map((item) => (
					<Box key={item.id}>
						<Box sx={{position: 'relative', width: '100%', height: '70vh'}}>
							<Image src={item.image.url} alt={item.title} fill style={{ objectFit: 'cover'}} />
							<Box sx={{
								position: 'absolute',
								top: 0,
								left: 0,
								right: 0,
								bottom: 0,
								width: '100%',
								height: '100%',
								backgroundColor: 'rgba(0, 0, 0, .7)'
							}} />
							<Box 
								width={{xs: '100%', md: '70%'}}
								position={'relative'} 
								color={'white'} 
								zIndex={999} 
								sx={{top: '50%', paddingLeft: {xs: '10px', md: '50px'}, transform: 'translateY(-50%)'}}
							>
								<Typography sx={{fontSize: { xs: '30px', md: '50px'}}}>{item.title}</Typography>
								<Box sx={{display: 'flex', gap: '10px'}}>
									<Avatar alt={item.author.name} src={item.author.avatar.url} />
									<Box>
										<Typography>{item.author.name}</Typography>
										{/* <Box>{format(new Date(item.createdAt), 'dd MMM yyyy')} &#x2022; {' '} 
											{calculateEstimatedTimeToRead(item.description.html)} min read
										 </Box> 
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Carousel> */}