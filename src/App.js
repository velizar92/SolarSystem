import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Planets from './pages/Planets';
import Planet from './pages/Planet';
import Error from './pages/Error';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="App">
       <Router>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/planets' element={<Planets />}></Route>
            <Route path='/planet/:id' element={<Planet />}></Route>
            <Route path='/contact' element={<Contact />}></Route>
            <Route path='*' element={<Error />}></Route>
          </Routes>
        </Router>
    </div>
  );
}

export default App;
