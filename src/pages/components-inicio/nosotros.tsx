import "./style/nosotros.css";

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros">
      <div className="nosotros__header">
        <p className="nosotros__eyebrow">Conoce la Historia</p>
        <h2 className="nosotros__title">Sobre la Banda</h2>
        <div className="nosotros__divider"></div>
      </div>

      <div className="nosotros__content">
        <div className="nosotros__cards-wrapper">
          <div className="nosotros__director-info">
            <p className="nosotros__director-label">Director</p>
            <h3 className="nosotros__director-name">Morris Eder Arce Amao</h3>
            <p className="nosotros__biography">
              Con más de 25 años en el arte musical, Morris Eder Arce Amao ha dedicado su vida a preservar y enaltecer la música tradicional de nuestra región. Su pasión y compromiso han permitido que La Provincial Coracora se consolide como una de las bandas más reconocidas, llevando nuestras raíces musicales a diversos escenarios y eventos especiales.
            </p>
          </div>

          <div className="nosotros__band-info">
            <p className="nosotros__band-label">Nuestra Historia</p>
            <h3 className="nosotros__band-title">La Provincial Coracora</h3>
            <p className="nosotros__band-biography">
              Creada en el año 2012 con el propósito de preservar el arte musical ayacuchano, La Provincial Coracora representa una fusión única de tradición e innovación. Rompiendo barreras geográficas y culturales, nuestra banda ha logrado tocar música de distintos puntos del país, integrando géneros ayacuchanos, cajamaquinos y muchas otras expresiones musicales que enriquecen nuestro repertorio. Nos dedicamos a mantener viva la esencia de nuestras raíces mientras exploramos nuevos horizontes sonoros.
            </p>
          </div>
        </div>

        <div className="nosotros__band-image">
          <img src="/grupo2.jpg" alt="La Provincial Coracora - Banda Completa" />
        </div>
      </div>
    </section>
  );
};
export default Nosotros;
