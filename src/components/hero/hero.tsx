import { Avatar, Box, Typography } from "@mui/material";

import 'react-multi-carousel/lib/styles.css';
import Carousel from 'react-multi-carousel';
import Image from "next/image";
import { format } from "date-fns";
import { HeroProps } from "./hero.props";
import { calculateEstimatedTimeToRead } from "@/src/helpers/time.format";

const Hero = ({blogs}: HeroProps) => {
    return(
        <Box width={'100%'} height={'70vh'} sx={{ background: 'red'}}>
            <Carousel responsive={{
				mobile: {
					breakpoint: { max: 4000, min: 0 },
					items: 1
				  }
			}}>
				{blogs.map(item => (
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
								<Typography color={'#adb5bd'} sx={{fontSize: { xs: '15px', md: '25px'}}}>{item.excerpt}</Typography>
								<Box sx={{display: 'flex', gap: '10px'}}>
									<Avatar alt={item.author.name} src={item.author.avatar.url} />
									<Box>
										<Typography>{item.author.name}</Typography>
										<Box>{format(new Date(item.createdAt), 'dd MMM yyyy')} &#x2022; {' '} 
											{calculateEstimatedTimeToRead(item.description.html)} min read
										 </Box>
									</Box>
								</Box>
							</Box>
						</Box>
					</Box>
				))}
			</Carousel>
        </Box>
    )
}

export default Hero;

