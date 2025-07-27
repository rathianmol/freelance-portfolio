import logo from './logo.svg';
import Navbar from './components/Navbar';
import Contact from './components/Contact';
import './App.css';
import { Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        {/* <Route path="/about" element={<Menu />} />
        <Route path="/experience" element={<About />} /> */}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
