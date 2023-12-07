import './Carrousel.css'

export const Carrousel = () =>{
    return (

    <div id="carouselExampleCaptions" className="carousel slide mt-5 mb-0" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active" data-interval="1500">
            <img src="./IMG/8-lapices-acuarelables.png" className="d-block w-50" height={250} alt=""/>
            <br /><br /><br /><br /><br /><br />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">First slide label</h5>
              <p className="text-dark">Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-19mm.png" className="d-block w-50" height={250} alt="..."/>
            <br /><br /><br /><br /><br /><br />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Second slide label</h5>
              <p className="text-dark">Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item" data-interval="1000">
            <img src="./IMG/clips-25mm.png" className="d-block w-50" height={250} alt="..."/>
            <br /><br /><br /><br /><br /><br />
            <div className="carousel-caption d-none d-md-block">
              <h5 className="text-dark">Third slide label</h5>
              <p className="text-dark">Some representative placeholder content for the third slide.</p>
            </div>
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
)
}

