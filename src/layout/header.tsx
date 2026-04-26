import { Link, useLocation, useNavigate } from "react-router";
import { useEffect, useState } from "react";
import "./style/header.css";
import { IconMenu2Filled } from "@tabler/icons-react";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
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

  const scrollToSection = (sectionId: string) => {
    const targetElement = document.getElementById(sectionId);
    if (!targetElement) return false;

    const headerOffset = 80;
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - headerOffset;

    smoothScrollTo(offsetPosition);
    return true;
  };

  const scrollWhenReady = (sectionId: string, retries = 24) => {
    if (scrollToSection(sectionId)) return;
    if (retries <= 0) return;
    requestAnimationFrame(() => scrollWhenReady(sectionId, retries - 1));
  };

  const handleNavigateToSection = (sectionId: string) => {
    setOpen(false);

    if (location.pathname !== "/") {
      navigate("/", { state: { scrollToSection: sectionId } });
      return;
    }

    scrollWhenReady(sectionId);
  };

  useEffect(() => {
    const state = location.state as { scrollToSection?: string } | null;
    const sectionId = state?.scrollToSection;

    if (location.pathname !== "/" || !sectionId) return;

    scrollWhenReady(sectionId);
    navigate("/", { replace: true, state: null });
  }, [location.pathname, location.state, navigate]);

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
       <IconMenu2Filled />
      </button>

      {/* NAV */}
      <nav className={`menu ${open ? "open" : ""}`}>
        <Link to="/" onClick={handleScrollToTop}>
          Inicio
        </Link>

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

        <Link to="repertorio" onClick={() => setOpen(false)}>
          Repertorio
        </Link>

        <Link to="contratos" className="cta" onClick={() => setOpen(false)}>
          Contratos
        </Link>
      </nav>
    </header>
  );
};

export default Header;
