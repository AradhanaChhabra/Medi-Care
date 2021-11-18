import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Router>
        <Sidebar/>
        <Navbar/>
      </Router>
      
    </div>
  );
}

export default App;
