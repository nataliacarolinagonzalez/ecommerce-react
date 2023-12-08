import './Navbar.css'
import '../index.css'

import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faUser, faHeart, faCartShopping, faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

export const Navbar = () =>
       <div >
            <div className="barra">
                <div id="logo">
                    <NavLink to="/inicio"><img src="IMG/logo.png" alt="Logo"/></NavLink>
                </div>
                <div id="barra-busqueda">
                    <form action="#">
                        <input type="text" placeholder="¿Qué estás buscando?" maxLength="150" minLength="3"/>
                        <button><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
                    </form>
                </div>
                <div id="carrito">
                    <NavLink to="#"><FontAwesomeIcon icon={faUser} style={{color:'#EF233C', fontSize: '20px', padding: '10px'}}></FontAwesomeIcon></NavLink>
                    <NavLink to="/favoritos"><FontAwesomeIcon icon={faHeart} style={{color:'#EF233C', fontSize: '20px', padding: '10px'}}></FontAwesomeIcon></NavLink>
                    <NavLink to="/carrito"><FontAwesomeIcon icon={faCartShopping} style={{color:'#EF233C', fontSize: '20px', padding: '10px'}}></FontAwesomeIcon></NavLink>
                </div>
            </div>
            <div >  
                <nav className="navbar navbar-expand-md navbar-dark bg-dark sticky-top">
                   {/* <img className='animacion' src="IMG/logo.png" alt=""/> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#options">
                        <span className="navbar-toggler-icon"></span></button>

                    <div className="collapse navbar-collapse" id="options">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link text-white mx-5" to="/inicio">Inicio</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white mx-5" to="/alta">Alta</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white mx-5" to="/contacto">Contacto</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white mx-5" to="/nosotros">Nosotros</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white mx-5" to="/carrito">Carrito</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link text-white mx-5" to="/otra">Otra</NavLink>
                            </li>
                        </ul>
                    </div>  
                    {/* <div className="collapse navbar-collapse" id='options'>
                        <ul>
                            <li><NavLink to="/inicio">Inicio</NavLink></li>
                            <li><NavLink to="/alta">Alta</NavLink></li>
                            <li><NavLink to="/contacto">Contacto</NavLink></li>
                            <li><NavLink to="/nosotros">Nosotros</NavLink></li>
                            <li><NavLink to="/carrito">Carrito</NavLink></li>
                            <li><NavLink to="/otra">Otra</NavLink></li>
                        </ul>
                    </div> */}     
                </nav> 
            </div>    
        </div>         