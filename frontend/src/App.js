import './App.css';
import Navbar from './Components/Navbar/Navbar.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Shop from './Pages/Shop.jsx';
import ShopCategory from './Pages/ShopCategory.jsx';
import Product from './Pages/Product.jsx';
import Cart from './Pages/Cart.jsx';
import LoginSignup from './Pages/LoginSignup.jsx';
import Footer from './Components/Footer/Footer.jsx';
import men_banner from './Components/Assets/banner_mens.png';
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';
import Payment from './Pages/Payment.jsx';

function App() {
  // Déterminez si l'utilisateur est authentifié ou non (c'est un exemple simplifié)
  const isAuthenticated = false;  // Mettez à true si l'utilisateur est authentifié

  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          {/* Route par défaut redirigeant vers la page de login/signup si non authentifié */}
          <Route path="/" element={isAuthenticated ? <Navigate to="/"/> : <Navigate to="/login"/>}/>
          <Route path="/Shop" element={<Shop/>}/>
          <Route path='/mens' element={<ShopCategory banner={men_banner} category="men"/>}/>
          <Route path='/womens' element={<ShopCategory banner={women_banner} category="women"/>}/>
          <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kid"/>}/>
          <Route path='/product' element={<Product/>}>
            <Route path=':productId' element={<Product/>}/>
          </Route>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<LoginSignup/>}/>
          <Route path='/payment' element={<Payment />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
