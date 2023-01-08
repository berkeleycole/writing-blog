import { ReactElement } from 'react'
import { Routes, Route } from "react-router-dom"

import Home from './pages/Home'
import NightSky from './pages/Poems/NightSky'

const App = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poems/nightsky" element={<NightSky />} />
      </Routes>
    </div>
  )
}

export default App