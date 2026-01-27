import { Link, useNavigate } from "react-router";
import "./style/footer.css";

const Footer = () => {
  const navigate = useNavigate();

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const smoothScrollTo = (target: number, duration = 750) => {
    const start = window.scrollY;
    const change = target - start;
    const startTime = performance.now();

    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = easeInOutCubic(progress);
      window.scrollTo(0, start + change * eased);
      if (elapsed < duration) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  const handleScrollToTop = () => {
    smoothScrollTo(0);
  };

  const handleNavigateToSection = (sectionId: string) => {
    const scrollToSection = () => {
      const targetElement = document.getElementById(sectionId);
      if (!targetElement) return;

      const headerOffset = 80;
      const elementPosition =
        targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerOffset;

      smoothScrollTo(offsetPosition);
    };

    if (window.location.pathname !== "/") {
      navigate("/");
      setTimeout(scrollToSection, 120);
    } else {
      scrollToSection();
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Marca */}
        <div className="footer-brand">
          <span className="brand">SINFONY🎺</span>
          <p>Banda Show La Provincial Coracora</p>
        </div>

        {/* Enlaces */}
        <div className="footer-links">
          <h4>Enlaces</h4>
          <Link to="" onClick={handleScrollToTop}>Inicio</Link>
          <a
            href="#nosotros"
            onClick={(e) => {
              e.preventDefault();
              handleNavigateToSection("nosotros");
            }}
          >
            La Banda
          </a>
          <Link to="repertorio">Repertorio</Link>
          <a
            href="#galeria"
            onClick={(e) => {
              e.preventDefault();
              handleNavigateToSection("galeria");
            }}
          >
            Galería
          </a>
          <Link to="contratos">Contratos</Link>
        </div>

        {/* Contacto */}
        <div className="footer-contact">
          <h4>Contacto</h4>
          <span>📍 Lima, Perú</span>
          <span>📞 +51 997 236 893</span>
          <span>✉️ bandashowprovincialcoracora@gmail.com</span>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} SINFONY · Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
