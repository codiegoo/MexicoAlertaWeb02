import './homePage.sass'
import React, { useEffect } from "react"


export const HomePage = () => {

    

    useEffect(() => {
        const scrollLinks = document.querySelectorAll(".scroll-link");
    
        scrollLinks.forEach((link) => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
    
            if (targetElement) {
              window.scrollTo({
                top: targetElement.offsetTop,
                behavior: "smooth",
              });
            }
          });
        });
      }, []);

    return(
        <>
            <div id="carouselExampleInterval" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active" data-bs-interval="5000" >
                        <img src="/images/mexico-alerta-slider-1.jpg" className='d-block backImg' alt="mexico alerta salvando vidas en colaboracion" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="/images/lluvia-mexico-alerta.png" className='d-block backImg' alt="lluvia proteccion salvando vidas" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="/images/nubes-mexico-alerta.png" className='d-block backImg' alt="nubes mexico alerta" />
                    </div>
                    <div className="carousel-item" data-bs-interval="5000">
                        <img src="/images/mapa-mexico-alerta.png" className='d-block backImg' alt="mapa mexico proteccion salvando vidas" />
                    </div>
                </div>
                <div className="sliderImgText">
                    <div className="titleSlider">
                        <h2>Hola, esto es</h2>
                    </div>
                    <div className="logoSlider">
                        <img src="/logoPNG.svg" alt="" />
                    </div>
                    <div className="subTitleSlider">
                        <p>Salvando vidas con coordinación <br /> en tiempo de desastre.</p>
                    </div>
                </div>
                <section className='cardsPresentationContain'>
                    <div className="card">
                        <img src="/icons/iconClock.svg" alt="" />
                        <div className="textCardPresent card1">
                            <h3>Reporta en tiempo real</h3>
                            <p>Proporciona información o datos de manera inmediata, sin demoras significativas, permitiendo una respuesta rápida y actualizada a la situación o evento en cuestión.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/icons/iconHouse.svg" alt="" />
                        <div className="textCardPresent card2">
                            <h3>Mira alertas del gobierno</h3>
                            <p>Emite notificaciones o advertencias emitidas por las autoridades gubernamentales, con el propósito de mantenerse informado sobre eventos importantes o situaciones de emergencia.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src="/icons/iconAlert.svg" alt="" />
                        <div className="textCardPresent card3">
                            <h3>Información de desastres</h3>
                            <p>Emite datos y detalles relacionados con eventos catastróficos o situaciones de emergencia, que incluyen detalles sobre su alcance, impacto, respuesta y medidas preventivas.</p>
                        </div>
                    </div>
                </section>
            </div>
            <section className="nosotrosContain" id='Nosotros'>
                <div className="nosotrosTitle">
                    <h4>Quienes somos</h4>
                </div>
                <div className="textNosotros">
                    <h5>México Alerta</h5>
                    <p>
                        Introducimos México Alerta, la aplicación líder en brindarte información crucial durante situaciones de desastres naturales. Con México Alerta, estarás siempre un paso adelante cuando se avecina una catástrofe, ya que te proporciona actualizaciones en tiempo real sobre el clima y las condiciones meteorológicas críticas en tu área. Ya sea un huracán, un terremoto o inundaciones, esta aplicación te mantendrá informado sobre los pronósticos, alertas y medidas de seguridad recomendadas para que tú y tu familia estén preparados y seguros. ¡Descarga México Alerta hoy y toma el control de tu seguridad durante eventos naturales imprevistos!
                    </p>
                </div>
                <div className="imgNosotros">
                    <img src="/images/nosotrosImg.png" alt="" />
                </div>
            </section>
            <section className="nosotrosCardsContain" >
                <div className="cardContain">
                    <div className="card">
                        <div className="nosotrosImgCardContain">
                            <img src="/images/cardCelProto.png" className='imgCard1' alt="" />
                        </div>
                        <div className="nosotrosTitleCardContain">
                            <h6>Aplicación</h6>
                        </div>
                    </div>
                    <p>Una aplicación para desastres naturales es invaluable porque proporciona información crítica y actualizada en momentos de emergencia. Te mantiene al tanto de las condiciones climáticas y de seguridad en tu área, te alerta ante amenazas inminentes, y ofrece consejos sobre cómo protegerte y tu familia.</p>
                </div>
                <div className="cardContain">
                    <div className="card">
                        <div className="nosotrosImgCardContain">
                            <img src="/images/cardWebProto.png" className='imgCard2' alt="" />
                        </div>
                        <div className="nosotrosTitleCardContain">
                            <h6>Plataforma Web</h6>
                        </div>
                    </div>
                    <p>Una plataforma web de desastres naturales es esencial debido a su capacidad para proporcionar información amplia y accesible en situaciones de emergencia. Permite a las personas, las comunidades y las autoridades acceder a datos en tiempo real sobre condiciones climáticas peligrosas, pronósticos, alertas tempranas y recursos de ayuda. Además, ofrece la posibilidad de coordinar esfuerzos de respuesta, compartir información crítica y establecer planes de evacuación de manera eficaz.</p>
                </div>
                <div className="cardContain">
                    <div className="card">
                        <div className="nosotrosImgCardContain">
                            <img src="/images/cardTeamProto.png" className='imgCard3' alt="" />
                        </div>
                        <div className="nosotrosTitleCardContain">
                            <h6>Equipo</h6>
                        </div>
                    </div>
                    <p>Proporcionamos asistencia directa a los usuarios que puedan tener dificultades técnicas o preguntas sobre cómo utilizar la aplicación en momentos críticos. Esto garantiza que la plataforma sea accesible para una amplia audiencia, incluyendo aquellos que pueden no estar familiarizados con la tecnología.</p>
                </div>
            </section>
            <section className="contactMeLayout" id='Contacto'>
                <div className='staticSliderContain'>
                    <div className="contentContain">
                        <div className="logoContain">
                            <img src="/logoPNG.svg" alt="" />
                        </div>
                        <div className="textContain">
                            <h6>
                                Contáctanos <br/> hoy mismo!
                            </h6>
                        </div>
                    </div>
                </div>
                <div className='infoContain'>
                    <div className="infoTextContain">
                        <p>Estaremos encantados de ponernos en contacto lo antes posible. Por favor, proporcióname tus detalles de contacto y te responderé en breve. Gracias por tu interés en comunicarte con nosotros.</p>
                    </div>
                    <div className="storeInfoContain">
                        <div className="subtitleInfo">
                            <h6>
                                Disponible en
                            </h6>
                        </div>
                        <div className='subtitleImg'>
                            <img src="/images/storeInfo.png" alt="" />
                        </div>
                    </div>
                    <div className='imgInfoContain'>
                        <img src="/images/celInfo.png" alt="" />
                    </div>
                </div>
                <div className="formInfoContain">
                    <div className="titleFormContain">
                        <h6>Contáctanos</h6>
                    </div>
                    <form action="POST">
                        <label htmlFor="nombre">Nombre: </label>
                        <input type="text" name='nombre' id='nombre'/>

                        <label htmlFor="celular">Celular: </label>
                        <input type="number" name='celular' id='celular'/>

                        <label htmlFor="correo">Correo: </label>
                        <input type="email" name='correo' id='correo'/>

                        <div className="buttonContain">
                            <button>Enviar</button>
                        </div>
                    </form>
                </div>
                <footer>
                    <div className="redesContain">
                        <img src="/logoMountain.svg" alt="" />
                        <p>Siguenos en nuestras redes sociales <br />
                            mexicoalerta@gmail.com <br />
                            &copy; 2023 México Alerta. Todos los derechos reservados
                        </p>
                    </div>
                    <div className="logoContain">
                        <img src="/blackLogo.svg" alt="" />
                    </div>
                </footer>
            </section>
            <div className="footerLine">
            </div>
        </>
    )
}