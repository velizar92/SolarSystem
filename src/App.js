import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Planets from './pages/Planets/Planets';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Details from './pages/Details/Details';
import About from './pages/About';

function App() {
 
  return (
    <div className="App">
        <Router>
          <Navbar />
            <Routes>
              <Route path='/' element={<Home />}></Route>
              <Route path='/planets' element={<Planets />}></Route>
              <Route path='/details/:id' element={<Details />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='*' element={<Error />}></Route>
            </Routes>
          </Router>
    </div>
  );
}

export default App;
