import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import { Avatar, Typography } from '@mui/material';

export default function SideBarExtra() {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <Box sx={{ width: '100%', maxWidth: 360, backgroundColor:'#F0F2F5', position:"fixed", overflow:"scroll"}} position="static">
      <List component="nav" aria-label="main mailbox folders">
        <ListItemButton 
          selected={selectedIndex === 1}
          onClick={(event) => handleListItemClick(event, 0)}
        >
          <ListItemIcon >
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhkuXVB9aRwrxJhiFQ0cGm71i0wT50wZ2p54rPDP6kT0vWF6mTs5JLA_gEZgwDyN5Ps&usqp=CAU' alt='avatar' sx={{ height:36, width:36}} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="Naida Islam" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yj/r/tSXYIzZlfrS.png" alt="friends" height={36} width={36} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography primary="Friends" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/PrjLkDYpYbH.png" alt="friends" height={36} width={36} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography primary="Communities(Groups)" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yU/r/D2y-jJ2C_hO.png" alt="friends" height={36} width={36} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography primary="Marketplace" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/y8/r/he-BkogidIc.png" alt="Marketplace" height={36} width={36} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography primary="Memories" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
            <img src="https://static.xx.fbcdn.net/rsrc.php/v3/yD/r/lVijPkTeN-r.png" alt="memories" height={36} width={36} />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography primary="Saved" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 0}
          onClick={(event) => handleListItemClick(event, 1)}
        >
          <ListItemIcon>
           <ArrowCircleDownIcon  sx={{ height:36, width:36}}/>
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="See more" />
        </ListItemButton>
      </List>
      <Divider variant='middle'/>
      <List component="nav" aria-label="secondary mailbox folder">
      <Typography sx={{ marginLeft:2}} variant="body2" component="p">
         Your shortcuts
         </Typography>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvotahErvsIlsVifJIshf3eLWUSidhWbrat9nHuYFYCQ&s' sx={{ height:36, width:36}}  variant="square"/>
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="Crypto Trading Group" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfnQDkIwk_rJeFLmbcaJIEvlGW7HW74T8_zwYOL7jebQ&s'  sx={{ height:36, width:36}} variant="square" />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="Moms and kids" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqSTHcT0W1-VEe3h4pr0gKnRNwnY_tdD2-xQ&usqp=CAU' sx={{ height:36, width:36}} variant="square" />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="School of your County" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVtNsWM2Fx7ejIlfuxmsKeHjTBAlFalc00wA&usqp=CAU' sx={{ height:36, width:36}} variant="square" />
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="Programming" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar src='' sx={{ height:36, width:36}} variant="square"/>
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="Funny animals" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar sx={{ height:36, width:36}} variant="square"/>
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="Funny and cute kids" />
        </ListItemButton>
        <ListItemButton
          selected={selectedIndex === 2}
          onClick={(event) => handleListItemClick(event, 2)}
        > <ListItemIcon >
            <Avatar sx={{ height:36, width:36}} variant="square"/>
          </ListItemIcon>
          <ListItemText sx={{ fontWeight: "500", color:'#050505', fontSize:'15px'  }} disableTypography  primary="LifeHacks" />
        </ListItemButton>


      </List>
    </Box>
  );
}
