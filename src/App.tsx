import NavBar from './components/navBar/NavBar';
import PageBackground from "./components/styledComponents/PageBackground"
import {Box,Typography} from "@mui/material"
import './App.css';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <PageBackground>
        <Box sx={{height:"50%",width:"50%",bgcolor:"primary.dark"}}>
          <Typography>Maple Grove Student Tracker</Typography>
        </Box>
      </PageBackground>
    </div>
  );
}

export default App;
