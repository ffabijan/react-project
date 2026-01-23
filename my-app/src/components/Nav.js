import React from 'react'

const Nav = () => {
  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-ligh">
      <div className="container">
        <a className="navbar-brand" href="./">
          <img src="img/vector.svg" alt="logo" height="12"/> 
        </a>
      
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#mainNavbar" aria-controls="mainNavbar" aria-expanded="true" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span> 
        </button>

        <div className="navbar-collapse collapse show" id="mainNavbar">
          
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            
         <li className="nav-item">
              <a className="nav-link text-end" href="./">Naslovna</a>
            </li>
                   <li className="nav-item">
              <a className="nav-link text-end" href="sponzori">Sponzori</a>
            </li>
                    <li className="nav-item">
              <a className="nav-link text-end" href="blog">Blog</a>
            </li>
         <li className="nav-item">
              <a className="nav-link text-end" href="voditelj">Voditelj</a>
            </li>
         <li className="nav-item">
              <a className="nav-link text-end" href="lokacija">Lokacija</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-end" href="media">Media</a>
            </li>

            <li className="nav-item">
              <a className="nav-link text-end" href="sudionici">Sudionici</a>
            </li>
               <li className="nav-item">
              <a className="nav-link text-end" href="tecaj">Tečaj</a>
            </li>
        
</ul>
    <ul className="navbar-nav ms-auto align-items-center">
      <li className="nav-item">
        <a className="nav-link" href="/profil" title="Profil korisnika">
            <img src="img/button.svg" alt="Sign in" className="icon-sm"/>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="/cart" title="Cart">
            <img src="img/svg.svg" alt="Cart" className="icon-lg"/>
        </a>
      </li>
    </ul>
          
        </div>
      </div>
    </nav>
   
   </>
  )
}

export default Nav



