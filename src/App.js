import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { First } from './pages/First';

function App() {
  return (
    <div className="App">
      <Router>
        <First/>
      </Router>
      
    </div>
  );
}

export default App;
