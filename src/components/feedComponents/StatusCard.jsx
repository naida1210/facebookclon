
import { Avatar, Box, Card, Divider, Grid, InputBase, ListItem,  } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import VideoCameraFrontIcon from '@mui/icons-material/VideoCameraFront';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import MoodIcon from '@mui/icons-material/Mood';

const StatusCard = () => {
  return (
    <Card sx={{ minWidth: 680, minHeight:123 }}>
     <Box sx={{ m: 2 }} className='statuscard'  >
     <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhkuXVB9aRwrxJhiFQ0cGm71i0wT50wZ2p54rPDP6kT0vWF6mTs5JLA_gEZgwDyN5Ps&usqp=CAU' alt='avatar'
     />
      <InputBase  placeholder="What's on your mind, Naida?"  className='inputstatus'></InputBase>
      </Box>

      <Divider variant="middle" />
      <Box sx={{ m: 2 }}>
      <Stack  direction="row" spacing={2}>
       <Grid container spacing={3}>
  <Grid item>
    <ListItem>
    <VideoCameraFrontIcon className='videoicon' />Live Video</ListItem>
  </Grid>
  <Grid item >
    <ListItem>
    <PhotoLibraryIcon className='photoicon'/>
    Photo/Video</ListItem>
  </Grid>
  <Grid item >
    <ListItem>
    <MoodIcon  className='moodicon'/>
    Feeling/Activity</ListItem>
  </Grid>
</Grid>
       
</Stack>
     
      </Box>

    </Card>
  )
}

export default StatusCard