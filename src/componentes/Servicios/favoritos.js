import axios from "axios"

const URL_API_FAVORITOS = 'https://6570da2a09586eff66420aae.mockapi.io/favoritos/'


export async function enviarFavoritos(favoritos) {
    try {
        const { data:favoritosGuardado } = await axios.post(URL_API_FAVORITOS, {pedido: favoritos})
        return favoritosGuardado
    }
    catch(error) {
        console.error('ERROR POST AXIOS:', error.message)
        return {}
    }
}


