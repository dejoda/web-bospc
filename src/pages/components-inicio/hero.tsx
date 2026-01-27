import type { MouseEvent } from "react";
import "./style/hero.css";

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

const Hero = () => {
  const handleSmoothScroll = (
    event: MouseEvent<HTMLAnchorElement>,
    selector: string
  ) => {
    event.preventDefault();
    const target = document.querySelector(selector) as HTMLElement | null;
    if (!target) return;

    const targetTop = target.getBoundingClientRect().top + window.scrollY;
    smoothScrollTo(targetTop);
  };

  return (
    <section id="inicio" className="hero">
        <div className="hero-overlay"></div>

        <div className="hero-container">
          <div className="hero-content">
            <span className="hero-tag">Banda Show</span>

            <h1>
              La <span>Provincial</span>
              <br />
              Coracora
            </h1>

            <p>
              Música en vivo para todo tipo de eventos, combinando elegancia,
              ritmo y tradición.
            </p>

            <div className="hero-actions">
              <a
                href="#contacto"
                className="hero-btn primary"
                onClick={(e) => handleSmoothScroll(e, "#contacto")}
              >
                Contrátanos
              </a>

              <a
                href="#galeria"
                className="hero-btn secondary"
                onClick={(e) => handleSmoothScroll(e, "#galeria")}
              >
                Ver galería
              </a>
            </div>
          </div>

          <div className="hero-logo">
            <img
              src="/hero-logo.png"
              alt="La Provincial Coracora - Logo"
            />
          </div>
        </div>
      </section>
  );
};

export default Hero;
