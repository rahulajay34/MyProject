 
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Cart from './pages/cart/Cart'
import Wishlist from './pages/wishlist/Wishlist'
import Contact from './pages/Contact Us/Contact Us'
import SignIn from './pages/login/SignIn'
 
import SignUp1 from './pages/login/SignUp'
import Men from './pages/Products/Men'
import Women from './pages/Products/Women'
import Kid from './pages/Products/Kid'
 
import MenSunglassess from './pages/Products/SunGlassessProductPage/MenSunglassess'
import WomenSunglasses from './pages/Products/SunGlassessProductPage/WomenSunglass'
import EyeGlasses from './pages/Products/KidGlassess/EyeGlasses'
import MenProductDetails from './pages/productDetails/MenProductDetails'
import WomenProductDetails from './pages/productDetails/WomenProductDetails'
import KidProductDetails from './pages/productDetails/KidProductDetails'
import EyeGlassessproductDetails from './pages/productDetails/kIdGlassess/EyeGlassessproductDetails'
import MenSunGlassessProductDetails from './pages/productDetails/SunGlassess/MenSunGlassessproductDetails'
import MouniRoy from './pages/Products/MouniRoy'
import MouniRoyProductDetails from './pages/productDetails/MouniRoyProductDetails'
import Premiumproduct from './pages/Products/PremiumEyeGlassess'
import PremiumEyeGlassessDetails from './pages/productDetails/PremiumProductDetails'
import KaranJohar from './pages/Products/KaranJohar'
import KaranJoharProductDetails from './pages/productDetails/KaranJoharProductDetails'
 
 
 
 

function App() {
   

  return (
    <>
      

       <Routes>
             <Route path='/' element={<Home/>}/>
             <Route path='/signin' element={<SignIn/>}/>
              <Route path='/signup' element={<SignUp1/>}/>
             <Route path='/cart' element={  <Cart/> }/>
             <Route path='/wishlist' element={<Wishlist/>}/>
             <Route path='/contact' element={<Contact/>}/>
             <Route path='/menproduct' element={<Men/>}/>
             <Route path='/womenProduct' element={<Women/>}/>
             <Route path='/kidProduct' element={<Kid/>}/>
             <Route path='/mensunglassess' element={<MenSunglassess/>}/>
             <Route path='/womensunglassess' element={<WomenSunglasses/>}/>
             <Route path='/kidsunglassess' element={<EyeGlasses/>}/>
             <Route path='/mouniroyproduct' element={<MouniRoy/>}/>
             <Route path='/premiumproduct' element={<Premiumproduct/>}/>
             <Route path='/karanjoharproduct' element={<KaranJohar/>}/>
{/* -------------- */}
              <Route path='/menproduct/:id' element={<MenProductDetails/>}/> 
              <Route path='/womenproduct/:id' element={<WomenProductDetails/>}/> 
              <Route path='/kidproduct/:id' element={<KidProductDetails/>}/>
              <Route path='/kidsunglassessproduct/:id' element={<EyeGlassessproductDetails/>}/> 
              <Route path='/mensunglassessproduct/:id' element={<MenSunGlassessProductDetails/>}/>  
              <Route path='/mouniroyproduct/:id' element={<MouniRoyProductDetails/>}/>  
              <Route path='/premuimproduct/:id' element={<PremiumEyeGlassessDetails/>}/>
              <Route path='/karanjoharproduct/:id' element={<KaranJoharProductDetails/>}/>
              
       </Routes>
      
    </>
  )
}

export default App
