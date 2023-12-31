import './Carrousel.css'

export const Carrousel = () =>{
    return (
      <div className='promos-carrousel'>
        <div className="promos">
          <div className="promo-uno">
              <p> <span> 3 cuotas sin interés </span> con tarjetas bancarias. </p>
          </div>
        </div>
        <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-5 bg-white" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active" data-interval="1500">
                <img src="https://acdn.mitiendanube.com/stores/607/264/products/4dedba09-2d1b-4f42-8bb7-93bc9baf52941-971cfb35a3a88775f216763208578138-1024-1024.webp" className="d-block w-50 " height={200} alt=""/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dcdn.mitiendanube.com/stores/001/119/073/products/whatsapp-image-2020-03-02-at-17-57-271-e720b0ecd1162d3dbc15832413671737-480-0.jpeg" className="d-block w-50" height={200}/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_948321-MLU70339176789_072023-F.webp" className="d-block w-50"  height={200}/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://dcdn.mitiendanube.com/stores/001/119/073/products/img-20230906-wa00481-cd494861f5be5240a916940046470917-480-0.jpg" className="d-block w-50"  height={200}/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://http2.mlstatic.com/D_NQ_NP_612180-MLU72566261454_112023-O.webp" className="d-block w-50"  height={200}/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://libreriaslevalle.com/15503-home_default/lapices-de-colores-pastel-tentacion-x20-unidades-mooving.jpg" className="d-block w-50"  height={200}/>
              </div>
              <div className="carousel-item" data-interval="1000">
                <img src="https://http2.mlstatic.com/D_NQ_NP_2X_672186-MLA31010749496_062019-F.webp" className="d-block w-50"  height={200}/>
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
      <div className="promos">
          <div className="promo-dos">
           <p> <span>Envio gratis </span> en compras mayores a $25.000 </p>
          </div> 
      </div>
</div>
)
}

