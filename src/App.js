import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { HashRouter, Routes , Route  , Link} from 'react-router-dom'
import Home from './pages/Home/Home';
function App() {
  return (
    <div>
      
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      </HashRouter>
      
    </div>
  );
}

export default App;
