import { use, useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import "./Admin.css";
import { Link } from 'react-router-dom';

const AdminLayout = () => {

    const location = useLocation();
    const path = location.pathname;

    const navigate = useNavigate();

    useEffect (() => {
        const token = localStorage.getItem("token");
        if (!token) {
            navigate("/");
        }
    }, [navigate]);


  return (
    
    <div className='container'>
        <div className='naslovna'></div>
        <div className='row'>
            <div className='col-md-6'></div>

                <div className='row mx-0 admin-panel'>
                    <div className='col-md-3 position-relative'>

                        <div className='profile_pic'>
                                <img src="https://i.pravatar.cc/300" alt="admin" height="100"/>
                                    </div>
                    </div>
                    <div className='col-md-9 px-2 py-3'>
                        <h1>Filip</h1>

                          <div className="col-md-6 px-3 py-3 ms-auto">
                        <button className="btn btn-info">Cancle</button>
                        <button className="btn btn-primary">Save</button>
                        </div>

                    <div className="row">
                        <div className="col-md-12">   
                          
                                        <ul className="profile-menu"> 
                                <li className="profile-item">
                                    <Link to="mojipodaci" className={`${path === '/admin/mojipodaci' ? 'text-danger' : ''}`}>Moji podaci</Link>     
                                </li>

                                <li className="profile-item">
                                    <Link  to="mojprofil" className={`${path === '/admin/mojprofil' ? 'text-danger' : ''}`}>Moj profil</Link>
                                </li>

                                <li className="profile-item">
                                    <Link to="postavke" className={`${path === '/admin/postavke' ? 'text-danger' : ''}`}>Postavke</Link>
                                </li>   

        </ul>

                                 </div>
                             </div>
                         </div>
                    </div>
                </div>

                <Outlet />
             </div>
    
    


  )
}

export default AdminLayout
