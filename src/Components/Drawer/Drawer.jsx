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
      <Toolbar className='drawer-toolbar' sx={{ width: '100%' , backgroundColor: 'primary'}}>
        <IconButton> <PersonOutlineOutlined/> </IconButton> | <div className='logout-btn'>Logout</div>
        <IconButton sx={{ marginLeft: 'auto', backgroundColor: 'rgb(216, 191, 216, 0.25)', padding: '8px', position: 'absolute', right: '13px', borderRadius: '0 100% 100% 0'}}> <Close /> </IconButton>
      </Toolbar>
      <List sx={{ margin: '0 32px' }}>
        {['Dashboard', 'Retailers', 'Always On', 'Event', 'Resources', 'Messages', 'Bookings'].map((text, index) => (
          <ListItem key={text} disablePadding sx={{ display: 'flex', alignItems: 'center' }}>
            <div  className='drawer-item-wrapper' >
              <ListItemButton sx={{ padding: '8px 0'}} >
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
}