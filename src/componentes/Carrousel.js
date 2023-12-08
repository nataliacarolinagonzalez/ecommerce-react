import './Carrousel.css'

export const Carrousel = () =>{
    return (
      <div className='alinear'>
      <div id="promos">
                <div className="uno">
                    <h5> <span> 3 cuotas sin interés </span> con tarjetas bancarias. </h5>
                </div>

            </div>

    <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5 bg-white" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="1500">
            <img src="./IMG/8-lapices-acuarelables.png" className="d-block w-50 " height={200} alt=""/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-19mm.png" className="d-block w-50" height={200}/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50"  height={200}/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50"  height={200}/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50"  height={200}/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50"  height={200}/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50"  height={200}/>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50"  height={200}/>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-target="#carouselExampleCaptions" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only"> Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-target="#carouselExampleCaptions" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
</div>
<div id="promos">
                <div className="dos">
                 <h5> <span>Envio gratis </span> en compras mayores a $25.000 </h5>
                </div> 
            </div>
</div>
)
}

