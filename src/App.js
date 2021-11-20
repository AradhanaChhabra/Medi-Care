import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import First from './pages/First';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path='/' element={<First/>} />
          <Route path='/signin' element={<SignInPage/>} exact/>
        </Routes>
          
      </Router>
      
    </div>
    
  );
}

export default App;
