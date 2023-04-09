import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';;
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';;
import { format } from "date-fns";

const Footer = () => {
    return (
        <Box 
            padding={'20px'}
            sx={{display: 'flex', 
                justifyContent: 'space-between', 
                alignItems: 'center', 
                backgroundColor: '#2b2d42', 
                color: 'white'
            }}    
        >
            <Typography>
                © {format(new Date(), 'yyyy')} All Right Reserved
            </Typography>
            <Box sx={{display: 'flex', gap: '15px'}}>
              <TelegramIcon />
              <GitHubIcon />
              <OndemandVideoIcon />
            </Box>
        </Box>
    )
}

export default Footer;