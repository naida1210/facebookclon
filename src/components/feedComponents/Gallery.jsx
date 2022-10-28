// eslint-disable-next-line

import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { Avatar } from '@mui/material';


export default function Gallery() {
 


  return (
    <Grid sx={{ flexGrow: 1 }} container spacing={2}>
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing={2}>
        
            <Grid  item>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhkuXVB9aRwrxJhiFQ0cGm71i0wT50wZ2p54rPDP6kT0vWF6mTs5JLA_gEZgwDyN5Ps&usqp=CAU' className="avatarka"
              />

              <Paper className='paper' elevation={12}


               
                sx={{
                    
                  height: 215,
                  width: 112,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                
              > 
            
              <img  className='image' height={213} width={110} src="https://images.unsplash.com/photo-1525134479668-1bee5c7c6845?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"  alt='women'/>
           
              </Paper>
            </Grid>
            <Grid  item>
            <Avatar className="avatarka"/>
              <Paper className='paper' elevation={12}


               
                sx={{
                    
                  height: 215,
                  width: 112,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                
              > 
              
              <img  className='image' height={213} width={110} 
              src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8cmFuZG9tJTIwcGVvcGxlfGVufDB8fDB8fA%3D%3D&w=1000&q=80"  alt='men'/>
              </Paper>
            </Grid>
            <Grid  item>
            <Avatar className="avatarka"/>
              <Paper className='paper' elevation={12}


               
                sx={{
                    
                  height: 215,
                  width: 112,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                
              > 
              
              <img  className='image' height={213} width={110} 
              src="https://mir-s3-cdn-cf.behance.net/project_modules/2800_opt_1/35af6a41332353.57a1ce913e889.jpg"  alt='men'/>
              </Paper>
            </Grid>
            <Grid  item>
            <Avatar className="avatarka"/>
              <Paper className='paper' elevation={12}


               
                sx={{
                    
                  height: 215,
                  width: 112,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                
              > 
              
              <img  className='image' height={213} width={110} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMURzMjVmlf3Bho3Okzqt4-iQCHRFsShd53A&usqp=CAU"  alt='women'/>
              </Paper>
            </Grid>
            <Grid  item>
            <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH4LaQg7p5rIR3TkSmhNMpPka0mYEKeLWRlg&usqp=CAU' className="avatarka"/>
              <Paper className='paper' elevation={12}


               
                sx={{
                    
                  height: 215,
                  width: 112,
                  backgroundColor: (theme) =>
                  theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
                }}
                
              > 
              
              <img  className='image' height={213} width={110} 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLUhkuXVB9aRwrxJhiFQ0cGm71i0wT50wZ2p54rPDP6kT0vWF6mTs5JLA_gEZgwDyN5Ps&usqp=CAU"  alt='women'/>
              </Paper>
            </Grid>
         
        </Grid>
      </Grid>
     
    </Grid>
  );
}
