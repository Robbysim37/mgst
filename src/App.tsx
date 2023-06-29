import NavBar from './components/navBar/NavBar';
import PageBackground from "./components/styledComponents/PageBackground"
import StaffHomepage from './components/staffHomepage/StaffHomepage';

import {Routes,Route} from "react-router-dom"
import StudentView from './components/studentView/StudentView';

function App() {
  return (
    <div style={{textAlign:"center"}}>
      <NavBar></NavBar>
      <PageBackground>
        <Routes>
          <Route path="/staff" element={<StaffHomepage/>}/>
          <Route path="/staff/:studentUsername" element={<StudentView/>}/>
        </Routes>
      </PageBackground>
    </div>
  );
}

export default App;
