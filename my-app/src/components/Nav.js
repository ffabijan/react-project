import { Link, useLocation } from "react-router-dom";
import logo from "../img/logo.family.png";
import cartIcon from "../img/cart.svg";
import signinIcon from "../img/signin.svg";
import {useState, useEffect} from "react"; 
import QRCode from "qrcode.react";
import logOut from "../img/log-out.svg";






const Nav = () => {

  const location = useLocation();
  const[name, setName] = useState(null);
    useEffect( 
      () => {
        const user = localStorage.getItem('username');
        if (user) setName(user);
      }, []);
    
    if(location.pathname ==="/signin") {
      return;
    }

    const logout = () => {
      localStorage.removeItem("token");
      localStorage.removeItem("username");
      setName(null);
    }

  return (
   <>
   <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
      <div className="container justify-content-center">
        <Link className="navbar-brand" to="/">
            <img src={logo} alt="logo" height="60" />
          </Link>
      
        <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainNavbar"
            aria-controls="mainNavbar"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

        <div className="navbar-collapse collapse text-center " id="mainNavbar">
          
          <ul className="navbar-nav mb-2 mx-auto mb-lg-0 text-center">
            
                   <li className="nav-item">
              <Link className="nav-link text-end" to="/sponzori">Family program</Link>
            </li>
                    <li className="nav-item">
              <Link className="nav-link text-end" to="/blog">Blog</Link>
            </li>
         <li className="nav-item">
              <Link className="nav-link text-end" to="/voditelj">Znamenitosti Hrvatske</Link>
            </li>
         <li className="nav-item">
              <Link className="nav-link text-end" to="/lokacija">Tko smo mi?</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-end" to="/media">Galerija partnera</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link text-end" to="/shop">Shop</Link>
            </li>


        {name ? (
            <li className="nav-item">
              <Link className="nav-link text-end" to="/admin">Admin</Link>
            </li>
        ) : ( 
          ""
        )}
</ul>
    <ul className="navbar-nav ms-auto align-items-center">
      

      {name ? (
                <button onClick={logout} className="btn">
                  <img src={logOut} alt="logout" width={20} />
                </button>
              ) : (
                <Link className="nav-link" to="/signin" title="Sign in">
                  <img src={signinIcon} alt="signin"/>
                </Link>
              )}

      <li className="nav-item">
        <Link className="nav-link" to="/cart" title="Cart">
            <img src={cartIcon} alt="cart"/>
        </Link>
      </li>
      

    </ul>
          
        </div>
      </div>
    </nav>
   
   </>
  )
}

export default Nav



