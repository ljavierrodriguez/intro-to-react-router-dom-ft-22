import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact'
import NotFound from './pages/NotFound'
import About from './pages/About'
import Menu from './components/Menu'
import Services from './pages/Services'
import Shop from './pages/Shop'
import Details from './pages/Details'

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Menu />
                <Routes>
                    <Route path='/details/:id' element={<Details />} />
                    <Route path='/shop/category/:category/:subcategory' element={<Shop />} />
                    <Route path='/services/:valor' element={<Services />} />
                    <Route path='/services' element={<Services />} />
                    <Route path='/about' element={<About />} />
                    <Route path='/contact' element={<Contact />}/>
                    <Route path='/' element={<Home />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App