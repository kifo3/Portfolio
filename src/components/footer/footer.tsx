import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import { format } from "date-fns";

const Footer = () => {
    return (
        <Box 
            padding={'20px'}
            sx={{display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: 'primary.dark', 
                color: 'white'
            }}    
        >
            <Typography>
                © {format(new Date(), 'yyyy')} All Right Reserved
            </Typography>
            <Box sx={{display: 'flex', gap: '15px'}}>
              <TelegramIcon />
              <InstagramIcon />
              <YouTubeIcon />
            </Box>
        </Box>
    )
}

export default Footer;