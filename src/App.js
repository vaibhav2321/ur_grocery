import React from 'react'
import {Route,Routes,BrowserRouter} from 'react-router-dom'
import Home from './PAGES/HomePages/Home'
import './App.css'
import About from './PAGES/Extra/About'
import Contact from './PAGES/Extra/Contact'
import ProductPage from './PAGES/Product/ProductPage'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import './COMPONENTS/Banners/BannerSlider';
import BannerSlider from './COMPONENTS/Banners/BannerSlider'
import Login from './PAGES/Auth/Login'
import Signup from './PAGES/Auth/Signup'
import ForgetPassword from './PAGES/Auth/ForgetPassword'
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/product/:prodid" 
          element={
            <ProductPage/>
          }
        />
        <Route path='/About' element={<About/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Signup' element={<Signup/>}/>
        <Route path='/ForgetPassword' element={<ForgetPassword/>} />
        <Route path="*" element={<div>
          <h1>404 NOT FOUND</h1>
        </div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App