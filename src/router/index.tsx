import { type FC, memo } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../views/Landing/home'
import Productos from '../views/Productos/productos'

const Router: FC = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/productos" element={<Productos />} />

                {/* <Route path="/contacto" element={<Contacto />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default memo(Router)
