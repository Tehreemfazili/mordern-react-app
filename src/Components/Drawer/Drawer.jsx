import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Drawer.scss'
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Collapse, IconButton } from '@mui/material';
import {  ArrowDropDown, ArrowRight, Close, Download, Error, ExpandLess, ExpandMore, PersonOutlineOutlined} from '@mui/icons-material';
import { DrawerItems } from './DrawerItems.tsx';


export default function DrawerLeft() {
  const [item, setItem] = useState([])
  const [open, setOpen] = useState(true);

  function handleItemClick(link) {
  //   // console.log('item clicked', item)
  //   // <Link to= {link} />
    console.log(link)
  //   // setOpen(false)
  //   // navigate(`/${link}`)


  }
  
  function handleSubItem() {
    setOpen(!open);
    console.log(open)
  }


  const drawerItems = DrawerItems;


  return (
    <Drawer sx={{ '& .MuiPaper-root': { overflow: 'visible', backgroundColor: 'rgb(216, 191, 216, 0.25)' } }} variant="permanent" anchor="left" className='drawer'>
      <Toolbar className='drawer-toolbar' sx={{ width: '100%' , backgroundColor: 'primary'}}>
        <IconButton> <PersonOutlineOutlined/> </IconButton> | <div className='logout-btn'>Logout</div>
        <IconButton sx={{ marginLeft: 'auto', backgroundColor: 'rgb(216, 191, 216, 0.25)', padding: '8px', position: 'absolute', right: '13px', borderRadius: '0 100% 100% 0'}}> <Close /> </IconButton>
      </Toolbar>
      
      <List sx={{ margin: '0 32px' }}>
      
        {/* { drawerItems.map((text, index) => (
          <ListItem key={text.name} disablePadding sx={{ display: 'flex', alignItems: 'center' }} onClick={handleItemClick(text.name, text.link)} >
              <div  className='drawer-item-wrapper' >
                <ListItemButton sx={{ padding: '8px 0'}} onClick={console.log('clicked')}>
                  <ListItemText primary={text.name} onClick={ console.log('clicked text')} />
                </ListItemButton>
                <Divider style={{width:'100%'}} />  
              </div>
                { text.subItem ? <ListItemIcon sx={{ justifyContent: 'end'}}>
                      <ArrowRight/> </ListItemIcon> : '' }
            </ListItem>
          ))}  */}
         

        { drawerItems.map((text, index) => (
          <ListItem key={text.name} disablePadding sx={{ display: 'flex', alignItems: 'center' }}  >
              <div  className='drawer-item-wrapper' >
                <ListItemButton sx={{ padding: '8px 0'}} onClick={ text.subItem != null ?  handleSubItem : handleItemClick(text.link) }>
                  <ListItemText primary={text.name}/>
                </ListItemButton>
                
                <Divider style={{width:'100%'}} />  
              </div>
                { text.subItem ?   <ListItemIcon sx={{ justifyContent: 'end'}}> { open ? 
                 <ArrowDropDown/> : <ArrowRight/>  } </ListItemIcon>  : '' } 
                 <Collapse in={open} timeout="auto" unmountOnExit>
                  <List component="div" disablePadding>
                  { text.subItem && text.subItem.map((text) => {
                      // {console.log('subitem - ',text.name)}
                      <ListItemButton>
                        <ListItemText primary={text.name} />
                      </ListItemButton>
                  })}
                  </List>
                </Collapse>
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