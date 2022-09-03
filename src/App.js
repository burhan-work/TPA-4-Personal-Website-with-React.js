import './App.css';
import About from './pages/about/About';
import Contact from './pages/contact/Contact';
import Gallery from './pages/gallery/Gallery';
import Home from './pages/home/Home';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />        
        <Route path='/contact' element={<Contact/>} />
        <Route path='/gallery' element={<Gallery/>} />
      </Routes>
    </div>
  );
}

export default App;
