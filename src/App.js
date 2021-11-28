import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import First from './pages/First';
import WelcomeHome from './pages/WelcomeHome/WelcomeHome';
import Appiontments from './pages/Appointments/Appiontments';
import HealthRecords from './pages/HealthRecords/HealthRecords';
// import Welcome from './pages/Welcome';
import 'bootstrap/dist/css/bootstrap.min.css';
import Statistics from './pages/Statistics/index';

function App() {
  const [login, setIsLogin] = useState(false);
  const loginHandler = () => {
    setIsLogin(true);
    console.log("heyyyy");
  }
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<First/>} />
          <Route path='/homepage/*' element={login ? <WelcomeHome /> : <SignInPage loginHandler={loginHandler}/>}/>
          {/* <Route path='/welcome' element={<Welcome />}></Route> */}
          {/* <Route exact path="/welcomeHome" element={<WelcomeHome/>} /> */}
          <Route path="/appointments" element={<Appiontments/>} />
          <Route path="/healthRecords" element={<HealthRecords/>} />
          <Route path="/stats" element={<Statistics/>} />
        </Routes>
          
      </Router>
      
    </div>
    
  );
}

export default App;
