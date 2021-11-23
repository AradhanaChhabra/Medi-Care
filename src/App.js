import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import First from './pages/First';
import WelcomeHome from './pages/WelcomeHome/WelcomeHome';
import Appiontments from './pages/Appointments/Appiontments';
import HealthRecords from './pages/HealthRecords/HealthRecords';
// import Welcome from './pages/Welcome';
import Statistics from './pages/Statistics/Statistics';

function App() {
  const login = true;
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<First/>} />
          <Route path='/homepage/*' element={login?<WelcomeHome/>:<SignInPage/>}/>
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
