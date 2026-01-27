
import { Link } from "react-router";
import "./style/error404.css"
const Error404 = () => {
 

  return (
    <>
      <div className="error404">
        <div className="error404__container">
          <div className="error404__content">
            <span className="error404__eyebrow">Error</span>
            <h1 className="error404__number">404</h1>
            <div className="error404__divider"></div>
            <h2 className="error404__title">Página no encontrada</h2>
            <p className="error404__description">
              Lo sentimos, la página que buscas no existe o ha sido movida.
              Regresa al inicio y descubre nuestra música.
            </p>
            <div className="error404__actions">
              <Link to="/" className="error404__btn primary">
                Volver al inicio
              </Link>
            </div>
          </div>
          <div className="error404__icon">
            <span className="error404__musical-note">♫</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error404;
