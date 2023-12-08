/* BOTON FAVORITOS CAMBIE COLOR */
/* let btnFav = document.querySelectorAll("#fav")
let btnCart = document.querySelectorAll("#cart")

let cambio = false
for(i=0; i<btnFav.length;i++){
    btnFav[i].addEventListener("click", function(){
        this.innerHTML = "<i class='fa-solid fa-heart'></i>"
        if (cambio) {
            this.innerHTML = "<i class='fa-solid fa-heart'></i>"
            cambio = false
        }else{
            this.innerHTML = "<i class='fa-regular fa-heart'></i>"
          cambio = true
        }
})
} */
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import{faHeart, faCartShopping} from '@fortawesome/free-solid-svg-icons'

/* const Menu = ({ select }) => <h1>{select ? "Menu Abierto???" : "Menu Cerrado"}</h1>; */

export default function Prueba() {
  const [menuSelect, setMenuSelect] = useState(false);

  const toggleMenu = () => setMenuSelect(prevState => !prevState);

  return (
    <div>
      <button onClick={toggleMenu}>
        {menuSelect ? <FontAwesomeIcon icon={faHeart} style={{color:'blue', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon> : <FontAwesomeIcon icon={faHeart} style={{color:'#EF233C', fontSize: '20px', paddingLeft: '10px'}}></FontAwesomeIcon>}
      </button>
      {/* <Menu select={menuSelect} /> */}
    </div>
  );
}

/* import React, { useState } from "react";

const Menu = ({ select }) => <h1>{select ? "Menu Abierto" : "Menu Cerrado"}</h1>;

export default function App() {
  const [menuSelect, setMenuSelect] = useState(false);

  const toggleMenu = () => setMenuSelect(prevState => !prevState);

  return (
    <div>
      <button onClick={toggleMenu}>
        {menuSelect ? "Cerrar Menu" : "Abrir Menu"}
      </button>
      <Menu select={menuSelect} />
    </div>
  );
} */
