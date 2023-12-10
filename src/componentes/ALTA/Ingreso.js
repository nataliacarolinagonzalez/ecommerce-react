import './Ingreso.css'


export default function Ingreso(props) {

    const { nombre, precio, stock, marca, categoria, detalles, foto, envio } = props.producto
    const { onChange, onSubmit, editarID, invalid } = props
   

    return (
        <div className="Ingreso">
            <form onSubmit={onSubmit} >
            <legend>Formulario de Alta de Productos</legend>
                {/* ------- Campo nombre ------- */}
                <div className="form-group">
                    <label htmlFor="nombre">nombre*</label>
                    <input type="text" id="nombre" className="form-control" value={nombre} onChange={onChange} />
                    {/* {errors.nombre && <div className='alert alert-danger p1'>{errors.nombre}</div>} */}
                </div>

                {/* ------- Campo precio ------- */}
                <div className="form-group">
                    <label htmlFor="precio">precio*</label>
                    <input type="number" id="precio" className="form-control" value={precio} onChange={onChange} />
                </div>

                {/* ------- Campo stock ------- */}
                <div className="form-group">
                    <label htmlFor="stock">stock*</label>
                    <input type="number" id="stock" className="form-control" value={stock} onChange={onChange} />
                </div>

                {/* ------- Campo marca ------- */}
                <div className="form-group">
                    <label htmlFor="marca">marca*</label>
                    <input type="text" id="marca" className="form-control" value={marca} onChange={onChange} />
                </div>

                {/* ------- Campo categoria ------- */}
                <div className="form-group">
                    <label htmlFor="categoria">categoria*</label>
                    <input type="text" id="categoria" className="form-control" value={categoria} onChange={onChange} />
                </div>

                {/* ------- Campo detalles ------- */}
                <div className="form-group">
                    <label htmlFor="detalles">detalles*</label>
                    <input type="text" id="detalles" className="form-control" value={detalles} onChange={onChange} />
                </div>

                {/* ------- Campo foto ------- */}
                <div className="form-group">
                    <label htmlFor="foto">foto*</label>
                    <input type="text" id="foto" className="form-control" value={foto} onChange={onChange} />
                </div>

                {/* ------- Campo envio ------- */}
                <div className="form-group form-check">
                    <input type="checkbox" id="envio" className="form-check-input" checked={envio} onChange={onChange} />
                    <label htmlFor="envio">envio*</label>
                </div>
                <p>* campo obligatorio.</p>

                {/* ----- botón de envío ------ */}
                <div id="pie-button">
                    <button disabled={invalid} className={`btn-${editarID?'envioOK':'envioNO'} mt-3 mb-5`}>
                        { editarID? 'Actualizar' : 'Enviar' }
                    </button>
                </div>
            </form>
        </div>

    )
}