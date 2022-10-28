import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import SportsEsportsRoundedIcon from '@mui/icons-material/SportsEsportsRounded';
import InputBase from '@mui/material/InputBase';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import Groups2TwoToneIcon from '@mui/icons-material/Groups2TwoTone';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { Avatar, Badge } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';
import NotificationsIcon from '@mui/icons-material/Notifications';


  

  


const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));
const styleIcon = {
    "height":"48px",
    "width":"48px",
    color:"#1093F3"
  
}


const styleIconRight = {
    "height":"20px",
    "width":"20px",
    color:"#333"
}


const styleIconMain = {
    "height":"28px",
    "width":"28px",
    color:"#1093F3"
  
}


const styleIconGroup ={
    "height":"28px",
    "width":"28px",
     "borderRadius" : "50px",
    "color":"#66676B"
    
}
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  
}));

const toolbarStyle = {
    height: '56px',
    justifyContent:"center",
    backgroundColor:"#fff",
    color:"#333",
    zIndex:99999999
  
  };

const StyledInputBase = styled(InputBase)(({ theme }) => ({
    
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

export default function Navbar() {
   
  return (
    <Box  
    sx={{ flexGrow: 1 }}>
      <AppBar  style={toolbarStyle} position="fixed">
      
        <Toolbar  >
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           <FacebookRoundedIcon
             style={styleIcon}
           />
          </IconButton>
          <Search  sx={{borderRadius:'50px', width: '220px', backgroundColor:'#F1F2F5'}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase 
              placeholder="Search Facebook"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
        
          <Box  sx={{ mr: 2, flexGrow: 1, display: {xs:'none', md:'flex'}, justifyContent:"center",alignItems:"center"} }>

          <IconButton
           
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 10, ml:15}}
          >
           <HomeIcon
             style={styleIconMain}
           />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 10}}
          >
           <StorefrontRoundedIcon
             style={styleIconGroup}
           />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 10,  "border" : "2px solid  #66676B","padding":2, "height":23, "width":23 }}
          >
           <Groups2TwoToneIcon 
             style={styleIconGroup}
           />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
           <SportsEsportsRoundedIcon
             style={styleIconGroup}
           />
          </IconButton>

       
          </Box>

          

          <Box  sx={{ ml: 2, flexGrow: 1, display: 'flex', justifyContent:"flex-end",alignItems:"center" }}>

          <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{  "backgroundColor":"#E1E2E7" }}
          
         
          >
           <AppsRoundedIcon
             style={styleIconRight}
           />
          </IconButton>
          <Badge badgeContent={4} color="error">
             <IconButton 
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 1, "backgroundColor":"#E1E2E7" }}
          >
         
           <MessageIcon
             style={styleIconRight}
            
           />
            
          </IconButton>
          </Badge>

         
           <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 1,"backgroundColor":"#E1E2E7" }}
          >
           <NotificationsIcon 
             style={styleIconRight}
           />
          </IconButton>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ ml: 1, "backgroundColor":"#E1E2E7" }}
          >
           <Avatar
             src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhkuXVB9aRwrxJhiFQ0cGm71i0wT50wZ2p54rPDP6kT0vWF6mTs5JLA_gEZgwDyN5Ps&usqp=CAU'
             style={styleIconRight}
           />
          </IconButton>
     

          </Box>

         
         
        </Toolbar>
        
      
      </AppBar>
    
    </Box>
  );
}
