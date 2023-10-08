import { AppBar, Box, Button, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";
import { navItems } from "@/src/config/constants";
import TerminalIcon from '@mui/icons-material/Terminal';import { useRouter } from "next/router";


interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
  }

  const drawerWidth = 300;


const Navbar = ({window}: Props) => {
    const router = useRouter();
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen((prevState) => !prevState);
    };

    const container = window !== undefined ? () => window().document.body : undefined;

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
          <Box sx={{ my: 2, display: 'flex', alignItems: 'center', gap: '5px' }}>
            
            <TerminalIcon />
            <Typography variant='h5' fontFamily={'fantasy'}>Kifoo</Typography>
          </Box>
          <Divider />
          <List>
            {navItems.map((item) => (
              <ListItem key={item.route} disablePadding>
                <ListItemButton onClick={() => router.push(item.route)}  sx={{ textAlign: 'center', cursor: 'pointer', fontSize: '20px' }}>
                  <ListItemText primary={item.label} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      );

    return (
        <Box height={'10vh'} sx={{ display: 'flex' }}>
            <AppBar sx={{height: '10vh', background: '#2b2d42'}} component='nav'>
                <Toolbar>
                    <IconButton
                        color='inherit'
                        aria-label='open drawer'
                        edge='start'
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                      >
                        <MenuIcon />
                      </IconButton>
                      <Box sx={{ my: 2, alignItems: 'center', gap: '5px', flexGrow: 1, display: { xs: 'none', sm: 'flex' }  }}>
                        <TerminalIcon />
                        <Typography variant='h6'>
                        Kifoo
                        </Typography>
                      </Box>
                      
                      <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                        <Button onClick={() => router.push(item.route)} key={item.route} sx={{ color: '#fff' }}>
                        {item.label}
                        </Button>
                        ))}
                      </Box>
                </Toolbar>
            </AppBar>
            <Box component='nav'>
                <Drawer
                  container={container}
                  variant='temporary'
                  open={mobileOpen}
                  onClose={handleDrawerToggle}
                  ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                  }}
                  sx={{
                    display: { xs: 'block', sm: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                  }}
                >
                  {drawer}
                </Drawer>
            </Box>
        </Box>
    )
}

export default Navbar;