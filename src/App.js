import './App.css';
import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import SignInPage from './pages/SignInPage';
import First from './pages/First';
import * as firebase from 'firebase';
import  firebaseConfig  from '../src/utils/firebase'


function App() {

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
 }else {
    firebase.app(); // if already initialized, use that one
 }


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
