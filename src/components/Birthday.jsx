import { Divider, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';

const Birthday = () => {
  return (
    <Box sx={{marginBottom:4}}>
        <Typography variant='body' sx={{"wordWrap":"break-word",  marginBottom:4, color:'#838487'}}> Birthdays </Typography>
        <Divider ></Divider>
        <Box sx={{'display':'flex', 'flexDirection':"row",'alignItems':"center", justifyContent:"space-between"}} >
        <CardGiftcardIcon sx={{color:'#24ADFD', height:'36px', width:'36px'}}/>
        <Typography sx={{"wordWrap":"break-word",marginTop:2,  marginBottom:2}}> John Dorian's birthday is today </Typography>
   
        </Box>
        <Divider ></Divider>
        
    </Box>
  )
}

export default Birthday