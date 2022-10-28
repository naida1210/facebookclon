

import { Grid, ListItem, Stack } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import RightBar from "./components/RightBar"
import Feed from './components/Feed';
import SideBar from './components/SideBar';

function App() {
  return (
    <div className="App">
       <Navbar/>
       <Stack className='stack' direction="row" spacing={2}>
       <Grid container spacing={3}>
  <Grid item xs>
    <ListItem> <SideBar/> </ListItem>
  </Grid>
  <Grid item xs={6}>
    <ListItem> <Feed/> </ListItem>
  </Grid>
  <Grid item xs>
    <ListItem> <RightBar/></ListItem>
  </Grid>
</Grid>
       
</Stack>
    </div>
    
  );
}

export default App;
