import { Box, ButtonGroup, Button, Typography } from "@mui/material";
import TelegramIcon from '@mui/icons-material/Telegram';
import GitHubIcon from '@mui/icons-material/GitHub';;
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';;
import { format } from "date-fns";
import { useRouter } from "next/router";

const Footer = () => {
    const routeTelegram = useRouter();
    const routeGithub = useRouter();
    const routeLive = useRouter();

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
            <Box sx={{display: 'flex', gap: '15px', cursor: 'pointer'}}>
              <TelegramIcon onClick={() => routeTelegram.push(`https://t.me/web_book13`)} />
              <GitHubIcon  onClick={() => routeGithub.push(`https://github.com/kifo3`)} />
              <OndemandVideoIcon  onClick={() => routeLive.push(`https://app.netlify.com/teams/kifo3`)} />
            </Box>
        </Box>
    )
}

export default Footer;