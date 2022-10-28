import { Avatar,Card, Divider, Grid, ListItem, Paper, Typography } from '@mui/material'
import { Box, Stack } from '@mui/system'
import React from 'react'
import PublicIcon from '@mui/icons-material/Public';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ReplyIcon from '@mui/icons-material/Reply';

   

const MainCard = (props) => {
  return (
    <Card sx={{ minWidth: 680, minHeight:651, overflow:'hidden'}}>
    <Box   sx={{ display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center", fontSize:"26px"}}>
     <Avatar src={props.image} sx={{'margin':2}}/>
      <Typography variant='h6'>{props.heading}</Typography>
      </Box>
    <Box sx={{ marginLeft:8, display:"flex", flexDirection:"row", textAlign:"center", alignItems:"center", fontSize:"13px"}}>
        <p>2h-</p>
        <span><PublicIcon sx={{height:'13px', width:'13px', marginLeft:'2px'}}/> </span>
    </Box>
      
      <Paper sx={{ width: 680, height:500, overflow:'hidden' }} elevation={3}>
        <img className='paperImg' src={props.paperImg} alt="img" />
      </Paper>
      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
      <Stack  direction="row" spacing={3}>
       <Grid container spacing={3}>
  <Grid item>
    <ListItem>
    
    <ThumbUpOffAltIcon  className='maincardicon' />Like
    
    </ListItem>
  </Grid>
  <Grid item >
    <ListItem>
    <ChatBubbleOutlineIcon className='maincardicon'/>
    Comment</ListItem>
  </Grid>
  <Grid item >
    <ListItem>
    <ReplyIcon className='maincardicon'/>
    Share</ListItem>
  </Grid>
</Grid>
       
</Stack>
     
      </Box>
    </Card>
  
  )
}

export default MainCard