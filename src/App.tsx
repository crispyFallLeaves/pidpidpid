import { Routes, Route } from 'react-router-dom';
import './App.css'
import HomePage from './pages/homepage.tsx';
import FouroFour from './pages/fourofour.tsx'
import About from './pages/about.tsx'
import Psim from './pages/psim.tsx'
import Dsim from './pages/dsim.tsx'
import Isim from './pages/isim.tsx'
import PIDsim from './pages/pidsim.tsx'
import {useState} from 'react';


function App() {
  const [pageP, setPageP] = useState(1);
  const [pageI, setPageI] = useState(1);
  const [pageD, setPageD] = useState(1);

  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<About />} />
      <Route path='/proportional' element={<Psim page={pageP} setPage={setPageP}/>} />
      <Route path='/integral' element={<Isim page={pageI} setPage={setPageI}/>} />
      <Route path='/derivative' element={<Dsim page={pageD} setPage={setPageD}/>} />
      <Route path='/pidsim' element={<PIDsim />} />
      <Route path='*' element={<FouroFour />} />

    </Routes>

  )
}

export default App
