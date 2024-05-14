import * as React from 'react';
import './Drawer.scss'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { IconButton } from '@mui/material';
import { ArrowRight, Close, Download, Error, PersonOutlineOutlined} from '@mui/icons-material';


export default function DrawerLeft() {
  return (
    <Drawer sx={{ '& .MuiPaper-root': { overflow: 'visible', backgroundColor: 'rgb(216, 191, 216, 0.25)' } }} variant="permanent" anchor="left" className='drawer'>
      <Toolbar className='drawer-toolbar' sx={{ width: '100%'}}>
        <IconButton> <PersonOutlineOutlined/> </IconButton> | <div className='logout-btn'>Logout</div>
        <IconButton sx={{ marginLeft: 'auto', backgroundColor: 'rgb(216, 191, 216, 0.25)', padding: '8px', position: 'absolute', right: '13px', borderRadius: '0 100% 100% 0'}}> <Close /> </IconButton>
      </Toolbar>
      <List sx={{ margin: '0 32px' }}>
        {['Dashboard', 'Retailers', 'Always On', 'Event', 'Resources', 'Messages', 'Bookings'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'flex', alignItems: 'center' }}>
            <div  className='drawer-item-wrapper' >
              <ListItemButton sx={{ padding: '8px 0'}}>
                <ListItemText primary={text} />
              </ListItemButton>
              <Divider style={{width:'100%'}} />  
            </div>
            <ListItemIcon sx={{ justifyContent: 'end'}}>
              <ArrowRight/>
            </ListItemIcon>
          </ListItem>
        ))}
        
          <ListItem sx={{  padding: '8px 0'}}><ListItemIcon sx={{ alignItems: 'center'  }}>
            <Download sx={{ paddingRight: '16px'}}/> <p> Download Guide</p>
          </ListItemIcon> </ListItem>
          <ListItem sx={{  padding: '8px 0' }}><ListItemIcon sx={{ alignItems: 'center'}}>
            <Error sx={{ paddingRight: '16px'}}/> <p> Help and support</p>
          </ListItemIcon> </ListItem>
      </List>
     </Drawer>
  )
    //   <CssBaseline />
    //   <AppBar
    //     position="fixed"
    //     sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
    //   >
    //     <Toolbar>
    //       <Typography variant="h6" noWrap component="div">
    //         Permanent drawer
    //       </Typography>
    //     </Toolbar>
    //   </AppBar>
    //   <Drawer
    //     sx={{
    //       width: drawerWidth,
    //       flexShrink: 0,
    //       '& .MuiDrawer-paper': {
    //         width: drawerWidth,
    //         boxSizing: 'border-box',
    //       },
    //     }}
    //     variant="permanent"
    //     anchor="left"
    //   >
    //     <Toolbar />
    //     <Divider />
    //     <List>
    //       {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}
    //     </List>
    //     <Divider />
    //     <List>
    //       {['All mail', 'Trash', 'Spam'].map((text, index) => (
    //         <ListItem key={text} disablePadding>
    //           <ListItemButton>
    //             <ListItemIcon>
    //               {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
    //             </ListItemIcon>
    //             <ListItemText primary={text} />
    //           </ListItemButton>
    //         </ListItem>
    //       ))}
    //     </List>
    //   </Drawer>
    //   <Box
    //     component="main"
    //     sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
    //   >
    //     <Toolbar />
    //     <Typography paragraph>
    //       Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    //       tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
    //       enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
    //       imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
    //       Convallis convallis tellus id interdum velit laoreet id donec ultrices.
    //       Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
    //       adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
    //       nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
    //       leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
    //       feugiat vivamus at augue. At augue eget arcu dictum varius duis at
    //       consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
    //       sapien faucibus et molestie ac.
    //     </Typography>
    //     <Typography paragraph>
    //       Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
    //       eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
    //       neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
    //       tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
    //       sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
    //       tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
    //       gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
    //       et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
    //       tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
    //       eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
    //       posuere sollicitudin aliquam ultrices sagittis orci a.
    //     </Typography>
    //   </Box>
    // </Box>
  // );
}