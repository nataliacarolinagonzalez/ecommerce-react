import './Card.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'


/* BOTON FAVORITOS CAMBIE COLOR */

/* function cambioBotones(){
    let btnFav = document.querySelectorAll("#fav")
    let btnCart = document.querySelectorAll("#cart")

    let cambio = false
    for(let i=0; i<btnFav.length;i++){
        btnFav[i].addEventListener("click", function(){
            this.innerHTML = <FontAwesomeIcon icon={faHeart} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon>
            if (cambio) {
                this.innerHTML = <FontAwesomeIcon icon={faHeart} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon>
                cambio = false
            }else{
                this.innerHTML = <FontAwesomeIcon icon={faHeart} style={{color:'#blue', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon>
              cambio = true
            }
})
}
}

import React, { useState } from "react";

const Menu = ({ open }) => <h1>{open ? "Menu Abierto" : "Menu Cerrado"}</h1>;

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(prevState => !prevState);

  return (
    <div>
      <button onClick={toggleMenu}>
        {menuOpen ? "Cerrar Menu" : "Abrir Menu"}
      </button>
      <Menu open={menuOpen} />
    </div>
  );
} */



export const Card = props => {

    const { producto, agregarCarritoID } = props

    return (
        <div className="Card">
            <section>
                <img src={producto.foto} alt="" />
                <p style={{fontVariant:"small-caps"}}>{producto.categoria}</p>
                <p className="nombre"><b>{producto.nombre}</b></p>
                <p>{producto.detalles}</p>
                <p className="precio">${producto.precio}</p>
                {/* <p><b>Stock: </b>{producto.stock}</p>
                <p><b>Marca: </b>{producto.marca}</p> */}               
                {/*  <p><b style={{color:'gold'}}>Envío: </b>{producto.envio? 'Si' : 'No'}</p> */}
                <div id='botones'>
                <button id='cart' onClick={
                    () => agregarCarritoID(producto.id)
                }><FontAwesomeIcon icon={faCartShopping} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon><p>Agregar al carrito</p></button>
                <button id='fav' /* onClick={
                    () => {agregarFavoritosID(producto.id), cambioBotones()}
                } */><FontAwesomeIcon icon={faHeart} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon><p>Agregar favorito</p></button>
                </div>
            </section>
        </div>
    )
}



                   