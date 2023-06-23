import { type FC, memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Landing/landing'

const Router: FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/contacto" element={<Contacto />} /> */}
      </Routes>
    </BrowserRouter>
  )
}

export default memo(Router)
