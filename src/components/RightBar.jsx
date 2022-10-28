import { Box, IconButton, Typography } from '@mui/material'
import React from 'react'
import RightBarExtra from './RightBarExtra'
import Birthday  from './Birthday'
import SearchIcon from '@mui/icons-material/Search';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const RightBar = () => {
  return (
    <Box sx={{ marginTop:55, width: '100%', maxWidth: 360, overflow:"scroll", display:'flex', flexDirection:'column', justifyContent:"center", alignItems:"center"}} position="fixed" >
      <Birthday />
      <Box sx={{"display":"flex",'flexDirection':"row", 'alignItems':'center', 'justifyContent':"space-between"}}>
      <Typography variant='h6'>Contacts</Typography>
     <SearchIcon sx={{'marginLeft':11}}/>
      <IconButton><MoreHorizIcon />
     
      </IconButton>

      </Box>
       
      <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3U1qBRmQOSJkBX5kmNbdrR_Q7InY1Q4zLEH0fZAjxg&s"
      name = "Darina Agabova"
      />
       <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxzaxF2tzPxGzxaAcwzg7ZTrnLgPMHyNyz-ME1qMOiw&s"
      name = "Maxim Kovalev"
      />
       <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0x5xvxzoh_Ibd3ljXVnN532DVwbzcMBlq_w&usqp=CAU"
      name = "Liza Vagnerald"
      />
      <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNnuQaz0ryvGpgLQy_Wm1sDT66gS7cXm2B4rUwTAa40PNG4tewyI6u7qxnG_ts6BqGoew&usqp=CAU"
      name = "Amir Rizwanul"
      />
      <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFxgLN_duRguBt0jymAuct5IuOn3Q8f0Fzw&usqp=CAU"
      name = "John Dorians "
      />
       <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD3U1qBRmQOSJkBX5kmNbdrR_Q7InY1Q4zLEH0fZAjxg&s"
      name = "Darina Agabova"
      />
       <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJxzaxF2tzPxGzxaAcwzg7ZTrnLgPMHyNyz-ME1qMOiw&s"
      name = "Maxim Kovalev"
      />
       <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0x5xvxzoh_Ibd3ljXVnN532DVwbzcMBlq_w&usqp=CAU"
      name = "Liza Vagnerald"
      />
      <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNnuQaz0ryvGpgLQy_Wm1sDT66gS7cXm2B4rUwTAa40PNG4tewyI6u7qxnG_ts6BqGoew&usqp=CAU"
      name = "Amir Rizwanul"
      />
      <RightBarExtra 
      avatar="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpFxgLN_duRguBt0jymAuct5IuOn3Q8f0Fzw&usqp=CAU"
      name = "John Dorians "
      />
      

    </Box>
  )
}

export default RightBar