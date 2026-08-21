import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homepage.tsx';
import FouroFour from './pages/fourofour.tsx'
import About from './pages/about.tsx'
import Psim from './pages/psim.tsx'
import Dsim from './pages/dsim.tsx'
import Isim from './pages/isim.tsx'
import PIDsim from './pages/pidsim.tsx'


function App() {

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/psim' element={<Psim />} />
      <Route path='/isim' element={<Isim />} />
      <Route path='/dsim' element={<Dsim />} />
      <Route path='/pidsim' element={<PIDsim />} />
      <Route path='*' element={<FouroFour />} />
      
    </Routes>
    
  )
}

export default App
