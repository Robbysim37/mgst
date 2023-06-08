import NavBar from './components/navBar/NavBar';
import PageBackground from "./components/styledComponents/PageBackground"
import StaffHomepage from './components/staffHomepage/StaffHomepage';

import {Routes,Route} from "react-router-dom"
import { Box } from '@mui/material';

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <NavBar></NavBar>
      <PageBackground>
        <Routes>
          <Route path="/" element={<StaffHomepage/>}/>
        </Routes>
      </PageBackground>
    </div>
  );
}

export default App;
