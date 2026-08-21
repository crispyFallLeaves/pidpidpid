import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homepage.tsx';
import FouroFour from './pages/fourofour.tsx'
import About from './pages/about.tsx'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='*' element={<FouroFour />} />
      
    </Routes>
    
  )
}

export default App
