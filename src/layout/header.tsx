import { Link, useNavigate } from "react-router";
import { useState } from "react";
import "./style/header.css";

const Header = () => {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

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
    setOpen(false);
    smoothScrollTo(0);
  };

  const handleNavigateToSection = (sectionId: string) => {
    setOpen(false);
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
    <header className="header">
      <div className="logo">
        <span className="brand">SINFONY🎺</span>
      </div>

      {/* BOTÓN HAMBURGUESA */}
      <button
        className={`hamburger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* NAV */}
      <nav className={`menu ${open ? "open" : ""}`}>
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

        <a
          href="#galeria"
          onClick={(e) => {
            e.preventDefault();
            handleNavigateToSection("galeria");
          }}
        >
          Galería
        </a>

        <Link to="repertorio" onClick={() => setOpen(false)}>Repertorio</Link>

        <Link to="contratos" className="cta" onClick={() => setOpen(false)}>
          Contratos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
