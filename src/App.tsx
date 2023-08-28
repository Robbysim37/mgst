import NavBar from './components/navBar/NavBar';
import PageBackground from "./components/styledComponents/PageBackground"
import StaffHomepage from './components/staffHomepage/StaffHomepage';

import {Routes,Route} from "react-router-dom"
import StudentView from './components/studentView/StudentView';
import LandingPage from './components/landingPage/LandingPage';
import PrivateRoutes from './utils/PrivateRoutes';

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <NavBar></NavBar>
      <PageBackground>
        <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route element={<PrivateRoutes/>}>
            <Route path="/staff" element={<StaffHomepage/>}/>
            <Route path="/staff/:studentUsername" element={<StudentView/>}/>
          </Route>
        </Routes>
      </PageBackground>
    </div>
  );
}

export default App;
