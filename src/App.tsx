import { ReactElement } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import NightSky from './pages/poems/NightSky'
import Riddle1 from './pages/poems/Riddle1'
import Coventry from './pages/poems/Coventry'

const App = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poems/nightsky" element={<NightSky />} />
        <Route path="/poems/coventry" element={<Coventry />} />
        <Route path="/poems/riddle" element={<Riddle1 />} />
      </Routes>
    </div>
  )
}

export default App