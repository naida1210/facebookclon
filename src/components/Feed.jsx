// eslint-disable-next-line 
import * as React from 'react';
import CardPage from './feedComponents/CardPage';
import StatusCard from './feedComponents/StatusCard';


import "../App.css"
import { Box, Stack } from '@mui/material';
import MainCard from './feedComponents/MainCard';






const Feed = () => {
  return (
     <Stack className='feedContainer' direction="column" spacing={2}> 
      
        <CardPage/>
        <StatusCard/>
        <MainCard 
        image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX2GUD8pMulfV3Jgb1DlDHS20mWzewZqWgqw&usqp=CAU"
        heading ="Do you want to learn how to invest?"
        paperImg ="https://www.nasdaq.com/sites/acquia.prod/files/2020/11/09/cryptoLP%20banner%203%20jpg.jpg"
        />
        <MainCard
          image ="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
          heading = "The braviest!"
          paperImg="https://scontent-atl3-1.xx.fbcdn.net/v/t39.30808-6/313019755_5578310048915822_3323700591304329261_n.png?stp=dst-png_p526x296&_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=XnlaE6SQlLIAX_rXydf&_nc_ht=scontent-atl3-1.xx&oh=00_AfCgwYEyaCVO1Hz1tRBED-_WEsqyWjP7uvRLz6NJikCB_Q&oe=635FB17A"
        />

        <MainCard
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRe868nG-xKAMiWw9JQ6-D23U-YBIAqYfOppQ&usqp=CAU" 
          heading ="Software Engineer Bootcamp - Beginner to advance"
          paperImg="https://coda.newjobs.com/api/imagesproxy/ms/niche/images/articles/Mack/bootcamp.jpg"
        />
         <MainCard
          image="http://1.bp.blogspot.com/-WJit-kJUdC0/TgpQq6XjA5I/AAAAAAAAAUw/ghCNjN0jYbg/s1600/angry_kid_re_top_42_world_military_strengths_ranking_by_global_fire_power-s500x333-94901.jpg" 
          heading ="Funny  and cute kids"
          paperImg="https://i.ytimg.com/vi/gMYFiybdPnI/sddefault.jpg"
        />
         <MainCard
          
          image="https://qph.cf2.quoracdn.net/main-qimg-fd2e4a034dec389ce2e51b7b89923f4c-pjlq" 
          heading ="Funny animals"
          paperImg="https://thumbor.bigedition.com/husky-good-morning-meme/EFrcPx-SMHDChIL_hS6nIqTlqn0=/567x0/filters:quality(80)/granite-web-prod/48/f0/48f096f394fe421fa43128fa65a1f2a1.jpeg"
        />
      
        </Stack>
  )
}

export default Feed