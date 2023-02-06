import { ReactElement } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'

// POETRY
import NightSky from './pages/poetry/NightSky'
import Riddle1 from './pages/poetry/RiddleOne'
import Coventry from './pages/poetry/Coventry'
import CupsOfAir from './pages/poetry/CupsOfAir'
import Embalming from './pages/poetry/Embalming'
import PactWithTheOcean from './pages/poetry/PactWithTheOcean'

// MUSINGS
import ReligiousMusings1 from './pages/musings/religious/various'


const App = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* POETRY */}
        <Route path="/poems/nightsky" element={<NightSky />} />
        <Route path="/poems/coventry" element={<Coventry />} />
        <Route path="/poems/riddle" element={<Riddle1 />} />
        <Route path="/poems/embalming" element={<Embalming />} />
        <Route path="/poems/cupsofair" element={<CupsOfAir />} />
        <Route path="/poems/pactwiththeocean" element={<PactWithTheOcean />} />

        {/* MUSINGS */}
        <Route path="/musings/religious/collected" element={<ReligiousMusings1 />} />

      </Routes>
    </div>
  )
}

export default App