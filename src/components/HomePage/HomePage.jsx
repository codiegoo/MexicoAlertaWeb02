import './homePage.sass'


export const HomePage = () => {

    return(
        <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="8000">
                    <img src="/images/mexico-alerta-slider-1.jpg" className="d-block w-100" alt="mexico alerta salvando vidas en colaboracion" />
                    <div className="sliderImgText">
                        <img src="/logoPNG.svg" alt="" />
                        <p>Salvando vidas con coordinación en tiempo de desastre.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src="/images/sismo-mexico-alerta-slider-1.jpg" className="d-block w-100" alt="sismo alerta mexico proteccion salvando vidas" />
                    <div className="sliderImgText">
                        <img src="/logoPNG.svg" alt="" />
                        <p>Salvando vidas con coordinación en tiempo de desastre.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src="/images/lluvia-mexico-alerta.png" className="d-block w-100" alt="lluvia proteccion salvando vidas" />
                    <div className="sliderImgText">
                        <img src="/logoPNG.svg" alt="" />
                        <p>Salvando vidas con coordinación en tiempo de desastre.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src="/images/nubes-mexico-alerta.png" className="d-block w-100" alt="nubes mexico alerta" />
                    <div className="sliderImgText">
                        <img src="/logoPNG.svg" alt="" />
                        <p>Salvando vidas con coordinación en tiempo de desastre.</p>
                    </div>
                </div>
                <div className="carousel-item" data-bs-interval="8000">
                    <img src="/images/mapa-mexico-alerta.png" className="d-block w-100" alt="mapa mexico proteccion salvando vidas" />
                    <div className="sliderImgText">
                        <img src="/logoPNG.svg" alt="" />
                        <p>Salvando vidas con coordinación en tiempo de desastre.</p>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}