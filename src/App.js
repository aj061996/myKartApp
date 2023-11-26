import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter as Router , Routes , Route  , Link} from 'react-router-dom'
import Home from './pages/Home/Home';
function App() {
  return (
    <div>
      
      <Router>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </Router>
      
    </div>
  );
}

export default App;
