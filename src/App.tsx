import { ReactElement } from 'react'
import { Routes, Route } from "react-router-dom";

import Home from './pages/Home'

const App = (): ReactElement => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/poems" element={<Poems />} />
      </Routes>
    </div>
  )
}

export default App