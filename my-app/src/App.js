import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';



import './Gutenberg.css'; 
import './App.css';

import 'animate.css';

import Nav from './components/Nav';
import Naslovnica from './pages/Naslovnica.js';
import Blog from './pages/Blog.js';
import Sponzori from './pages/Sponzori.js';
import Voditelj from './pages/Voditelj.js';
import Lokacija from './pages/Lokacija.js';
import Media from './pages/Media.js';

import Kontakt from './pages/Kontakt.js';

import Sudionici from './pages/Sudionici.js';

import Profil from './components/zadaci/Profil.js';
import Footer from './components/Footer.js';
import Tecaj from './components/zadaci/Tecaj.js';
import BlogSingle from './pages/BlogSingle.js';
import SignIn from './pages/SignIn.js';
import SudioniciSingle from './pages/SudioniciSingle.js';

import AdminLayout from './pages/Admin/AdminLayout.js';
import MojiPodaci from './pages/Admin/MojiPodaci.js';
import Postavke from './pages/Admin/Postavke.js';
import MojProfil from './pages/Admin/MojProfil.js';
import Znamenitosti from './pages/Znamenitosti.js';

import Shop from './pages/Shop.js';
import Card from './pages/Cart.js';
import Checkout from './pages/Checkout.js';
import Cart from './pages/Cart.js';



function App() {
  return (

    <BrowserRouter basename={'/ffabijan'}>
    <Nav />
    <Routes>
      <Route path='/' element={<Naslovnica />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='sponzori' element={<Sponzori />} />
      <Route path='/voditelj' element={<Voditelj />} />
      <Route path='kontakt' element={<Kontakt />} />
      <Route path='/sudionici' element={<Sudionici />} />
      <Route path='/sudionici/:slug' element={<SudioniciSingle />} />
      <Route path="/blog/:slug" element={<Blog />} />
      <Route path='/lokacija' element={<Lokacija />} />
      <Route path='/tecaj' element={<Tecaj />} />
      <Route path='/profil' element={<Profil />} />
      <Route path='/signin' element={<SignIn />} />
      <Route path='/znamenitosti' element={<Znamenitosti />} />

      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} />

      

      <Route path="admin" element={<AdminLayout />} >
        <Route path="mojipodaci" element={<MojiPodaci />} />
        <Route path="mojprofil" element={<MojProfil/>} />
        <Route path="postavke" element={<Postavke />} />

      </Route>

      <Route path='/media' element={<Media />} />
    </Routes>
    <Footer />     
    </BrowserRouter>
  );


}

export default App;


