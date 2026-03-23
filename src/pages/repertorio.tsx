
import { useEffect } from "react";
import "./style/repertorio.css";
import HeroGrupo from "../assets/hero-grupo.jpg";
import reper2 from "../assets/reper2.jpg";
import reper1 from "../assets/reper1.jpg";
import reper3 from "../assets/reper3.jpeg";
import Scroll from "../utils/scroll";

const repertorioData = [
  {
    categoria: "Huaynos",
    titulo: "Amenizamos todo tipo de eventos",
    descripcion:
      "Interpretamos huaynos de distintas regiones del Perú, llevando al escenario la riqueza musical de cada departamento con respeto y autenticidad.",
    imagen: HeroGrupo,
    alt: "Orquesta interpretando huaynos en evento",
  },
  {
    categoria: "Cumbia",
    titulo: "Cumbia para bailar y gozar",
    descripcion:
      "Contamos con un repertorio de cumbia para animar a todos los invitados, crear un ambiente alegre y mantener la energía durante la celebración.",
    imagen: reper1,
    alt: "Orquesta tocando cumbia para el público",
  },
  {
    categoria: "Religioso",
    titulo: "Acompañamiento en eventos de fe",
    descripcion:
      "Amenizamos ceremonias religiosas, procesiones y actividades tradicionales con una ejecución musical acorde al carácter de cada evento.",
    imagen: reper2,
    alt: "Participación musical en ceremonia religiosa",
  },
  {
    categoria: "Carnavales",
    titulo: "Carnavales con identidad regional",
    descripcion:
      "Amenizamos carnavales de distintas regiones respetando sus costumbres y tradiciones para brindar una presentación auténtica y cultural.",
    imagen: reper3,
    alt: "Orquesta en carnaval regional",
  },
];




const Repertorio = () => {
  useEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const scrollTop = () => window.scrollTo(0, 0);
    scrollTop();

    const timer = window.setTimeout(scrollTop, 0);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <main className="repertorio repertorio--clean">
      <header className="repertorio__header">
        <span className="repertorio__eyebrow">Repertorio</span>
        <h1 className="repertorio__title">Ritmos del Perú para todo evento</h1>
        <p className="repertorio__description">
          Nuestra orquesta ameniza eventos sociales, culturales y religiosos con
          ritmos peruanos como huaynos, cumbia, salsa, merengue, marinera,
          carnavales y otros géneros.
        </p>
        <div className="repertorio__divider" />
      </header>

      <section className="repertorio__clean-lista">
        {repertorioData.map((item, index) => (
          <article
            key={item.titulo}
            className={`repertorio__clean-panel ${
              index % 2 !== 0 ? "repertorio__clean-panel--reverse" : ""
            }`}
          >
            <figure className="repertorio__clean-media">
              <img src={item.imagen} alt={item.alt} loading="lazy" />
            </figure>
            <div className="repertorio__clean-content">
              <span className="repertorio__clean-categoria">{item.categoria}</span>
              <h2>{item.titulo}</h2>
              <p>{item.descripcion}</p>
            </div>
          </article>
        ))}
      </section>

      <Scroll></Scroll>
    </main>
  );
};
export default Repertorio;
