import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Home';
import AddReceipe from './AddReceipe';
import ReceipeDetail from './ReceipeDetail';
function App() {
  return (
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/addReceipe' element={<AddReceipe/>}/>
      <Route path='/receipe/:_id' element={<ReceipeDetail/>}/>
    </Routes>
    </Router>
  );
}

export default App;
