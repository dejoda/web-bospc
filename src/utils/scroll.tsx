import { useEffect, useState } from "react";
import "./style/scroll.css";

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

const Scroll = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const updateState = () => {
      const { scrollY, innerHeight } = window;
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - innerHeight;

      setIsAtTop(scrollY < 160);
      setIsVisible(maxScroll > 160 || scrollY > 20);
    };

    window.addEventListener("scroll", updateState, { passive: true });
    window.addEventListener("resize", updateState, { passive: true });
    updateState();

    return () => {
      window.removeEventListener("scroll", updateState);
      window.removeEventListener("resize", updateState);
    };
  }, []);

  const handleClick = () => {
    const { innerHeight } = window;
    const doc = document.documentElement;
    const maxScroll = doc.scrollHeight - innerHeight;
    const target = isAtTop ? Math.max(maxScroll, 0) : 0;

    smoothScrollTo(target);
  };

  const label = isAtTop ? "Bajar al final" : "Volver arriba";

  return (
    <button
      type="button"
      className={`scroll ${isVisible ? "scroll--visible" : ""}`}
      onClick={handleClick}
      aria-label={label}
      title={label}
    >
      <svg
        aria-hidden="true"
        width="48"
        height="48"
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="scroll__icon"
      >
        <polyline
          points="16,24 32,8 48,24"
          fill="none"
          stroke="#f9cf52"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polyline
          points="16,42 32,56 48,42"
          fill="none"
          stroke="#f9cf52"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

export default Scroll;
