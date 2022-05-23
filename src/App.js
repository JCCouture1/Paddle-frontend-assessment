import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Blog from './components/Blog';
import Comingsoon from './components/Comingsoon';
import Github from './components/Github';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
          <Route path="/" element={<Comingsoon />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/blog" element={<Blog />}/>
          <Route path="/github" element={<Github />}/>
      </Routes>
    </div>
  );
}

export default App;
