import logo from './logo.svg';
import './App.css';
import { Navbar } from './Components/Navbar/Navbar';
import { HashRouter, Routes , Route  , Link} from 'react-router-dom'
import Home from './pages/Home/Home';
import Footer from './Components/Footer/Footer';
function App() {
  return (
    <div>
      
      <HashRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
      <Footer/>
      </HashRouter>
      
    </div>
  );
}

export default App;
