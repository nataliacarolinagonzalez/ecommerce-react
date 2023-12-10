import './Index.css'

export function Form(props) {
    const { nombre, tel, email, acercaDe, condiciones } = props.form
    const { onChange, onSubmit, invalid } = props
    return (
        <div className="Form">
            <div id="formulario">
                <form onSubmit={onsubmit}>
                        <legend>Formulario de Contacto</legend>
                        <label for="nombre">Nombre y Apellido: *</label>
                        <input id="nombre" name="nombre" type="text" value={nombre} onChange={onChange}/>
                        <div className="alert alert-dark p-1" role="alert">
                            Error en el campo de nombre
                        </div>
                        <label for="tel">Teléfono *:</label>
                        <input id="tel"  name="tel" type="tel" placeholder="Código de área y número" value={tel} onChange={onChange}/>
                        <div className="alert alert-dark p-1" role="alert">
                            Error en el campo de tel
                        </div>
                        <label for="email">E-mail: *</label>
                        <input id="email" name="email" type="email" placeholder="Ej: mail@gmail.com" value={email} onChange={onChange}/> 
                        <div className="alert alert-dark p-1" role="alert">
                            Error en el campo de email
                        </div>
                        <label for="acercaDe">Comentarios</label>
                        <textarea name="acercaDe" id="acercaDe" cols="20" rows="10" maxLength="300" placeholder="Escribí tu consulta" value={acercaDe} onChange={onChange}></textarea>
                        <div className="alert alert-dark p-1" role="alert">
                            Error en el campo de Comentarios
                        </div>   
                        <input className="pie-input" id="condiciones" name="condiciones" value="acepta" type="checkbox" checked={condiciones} onChange={onChange} />
                        <label className="pie-input ml-2" for="condiciones">Acepto las condiciones*</label>
                        <p>*: campo obligatorio.</p>
                        <div id="pie-button">
                            <button disabled={invalid}>
                    Enviar</button>
                            <button  type="reset" className="pie-input ml-3"> Restablecer</button> 
                        </div>
                </form> 
            </div> 
        </div> 
    )
}




/* action="https://formspree.io/f/mvonjkay" target="_blank" method="post" */