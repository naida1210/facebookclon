import { Avatar, ListItem, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const RightBarExtra = (props) => {
  return (
    <Box  sx={{ width: '100%', maxWidth: 360, overflow:"scroll", display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center"}} >
      <Box>
     
      <ListItem>
     
        <Avatar sx={{'marginRight':2}}
        src={props.avatar} />
        <Typography sx={{'paddingRight':8}}>{props.name}</Typography>
      </ListItem>
      </Box>

        
    </Box>
  )
}

export default RightBarExtra