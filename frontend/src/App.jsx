import './App.css'
import {BrowserRouter,Route, RouterProvider, Routes} from 'react-router-dom'
import Navbar from './NavBar'
import HomePage from './landingPages/Home/HomePage'
import AboutPage from './landingPages/About/AboutPage'
import ProductsPage from './landingPages/Products/ProductsPage'
import PricingPage from './landingPages/Pricing/PricingPage'
import SignUpPage from './landingPages/SignUp/SignUpPage'
import SupportPage from './landingPages/Support/SupportPage'
import Footer from './Footer'

function App() {

  return (
   <>
      <BrowserRouter>
         <Navbar/>    
          <Routes>
           <Route path='/' element={<HomePage/>}> </Route>
           <Route path='/about' element={<AboutPage/>}></Route>
           <Route path='/products' element={<ProductsPage/>}></Route>
           <Route path='/pricing' element={<PricingPage/>}></Route>
           <Route path='/signup' element={<SignUpPage/>}></Route>
           <Route path='/support' element={<SupportPage/>}></Route>
          </Routes>
         <Footer/>
      </BrowserRouter>
   </>
  )
}

export default App
