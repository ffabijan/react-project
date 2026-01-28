import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';

import './Gutenberg.css'; 
import './App.css';

import Nav from './components/Nav';
import Naslovnica from './pages/Naslovnica.js';
import Blog from './pages/Blog.js';
import Sponzori from './pages/Sponzori.js';
import Voditelj from './pages/Voditelj.js';
import Lokacija from './pages/Lokacija.js';
import Media from './pages/Media.js';

import Sudionici from './pages/Sudionici.js';

import Profil from './components/zadaci/Profil.js';
import Footer from './components/Footer.js';
import Tecaj from './components/zadaci/Tecaj.js';
import BlogSingle from './pages/BlogSingle.js';



function App() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
      <Route path='/' element={<Naslovnica />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='sponzori' element={<Sponzori />} />
      <Route path='/voditelj' element={<Voditelj />} />

      <Route path='/sudionici' element={<Sudionici />} />
      <Route path="/blog/:slug" element={<Blog />} />
      <Route path='/lokacija' element={<Lokacija />} />
      <Route path='/sudionici' element={<Sudionici />} />
      <Route path='/tecaj' element={<Tecaj />} />
      <Route path='/profil' element={<Profil />} />

      <Route path='/media' element={<Media />} />
    </Routes>
    <Footer />     
    </BrowserRouter>
  );


}

export default App;


