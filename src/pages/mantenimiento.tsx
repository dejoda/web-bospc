
import { Link } from "react-router";
import "./style/mantenimiento.css"
const Mantenimiento = () => {
 

  return (
    <>
      <div className="maintenance">
        <div className="maintenance__container">
          <div className="maintenance__content">
            <span className="maintenance__eyebrow">Aviso</span>
            <h1 className="maintenance__number">503</h1>
            <div className="maintenance__divider"></div>
            <h2 className="maintenance__title">Página en mantenimiento</h2>
            <p className="maintenance__description">
              Estamos trabajando para traerte una experiencia mejor.
              Vuelve pronto o regresa al inicio mientras terminamos los ajustes.
            </p>
            <div className="maintenance__actions">
              <Link to="/" className="maintenance__btn primary">
                Volver al inicio
              </Link>
            </div>
          </div>
          <div className="maintenance__icon">
            <span className="maintenance__musical-note">♫</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Mantenimiento;
