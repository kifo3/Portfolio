import { Avatar, Box, Divider, Typography } from "@mui/material";
import Image from "next/image";
import { format } from "date-fns";

const Content = () => {
    return (
        <Box width={{ xs: '100%', md: '65%'}}>
            {data.map(item => (
                <Box key={item.image} 
                    sx={{ backgroundColor: 'rgba(0, 0, 0, .2)', 
                    padding: '20px', 
                    borderRadius: '8px', 
                    boxShadow: '0px 8px 16px rgba(255, 255, 255, .1)', 
                    marginTop:'5px' 
                }}>
                    <Box position={'relative'} width={'100%'} height={{ xs: '30vh', md: '50vh'}}>
						<Image fill src={item.image} alt={item.title} style={{objectFit:'cover', borderRadius: '10px'}} />
					</Box>
					<Typography variant="h4" marginTop={'30px'}>
						{item.title}
					</Typography>
					<Typography variant="body1" color={'grey'}>
						{item.exerpt}
					</Typography>
					<Divider sx={{marginTop:'30px'}} />
					<Box sx={{display: 'flex', gap: '10px', marginTop: '10px'}}>
						<Avatar alt={item.author.name} src={item.author.image} />
						<Box>
							<Typography>{item.author.name}</Typography>
							<Box color={'grey'}>{format(new Date(), 'dd MMM yyyy')} &#x2022; 10min read</Box>
						</Box>
					</Box>
                </Box>
            ))}
        </Box>
    )
}

export default Content;



const data = [
    {
		image: 'https://media.graphassets.com/MxJZhmooRRuudoErkQ38',
		title: 'Technical SEO with Hygraph',
		exerpt: 'Get started with your SEO implementation when using a Headless CMS',
		author: {
			name: 'Maftuna Boborakhimova',
			image: 'https://media.graphassets.com/ETvvAaHFTjGtXVBdjKGc',
		},
	},
	{
		image: 'https://media.graphassets.com/bh3K2NNtTHCN260Xfq9h',
		title: 'Union Types and Sortable Relations with Hygraph',
		exerpt: 'Learn more about Polymorphic Relations and Sortable Relations with Hygraph',
		author: {
			name: 'Maftuna Boborakhimova',
			image: 'https://media.graphassets.com/ETvvAaHFTjGtXVBdjKGc',
		},
	},
]