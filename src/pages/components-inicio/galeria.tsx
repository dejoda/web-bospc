import "./style/galeria.css";
import galeria1 from "../../assets/galeria1.jpg";
import galeria2 from "../../assets/gaeria2.jpg";
import galeria3 from "../../assets/galeria3.jpg";
import galeria4 from "../../assets/galeria4.jpg";
import galeria5 from "../../assets/galeria5.jpg";
import galeria6 from "../../assets/galeria6.jpg";
import galeria7 from "../../assets/galeria7.jpg";

const videos = [
  "88gVVVCTtEw",
  "xg88FXzDej4",
  "POTFeLOjww8",
  "d_1K4kQisdc",
  "4MWtkp3Q-y8",
  "zAnqBDTiQzk"
];

const photos = [
  {
    src: galeria1,
    alt: "Banda en presentación en vivo",
    layout: "wide"
  },
  {
    src: galeria2,
    alt: "Foto grupal de la banda",
    layout: "tall"
  },
  {
    src: galeria3,
    alt: "Evento especial con la banda",
    layout: "wide"
  },
  {
    src: galeria4,
    alt: "Performance al aire libre",
    layout: "tall"
  },
  {
    src: galeria5,
    alt: "La banda en concierto nocturno",
    layout: "square"
  },
  {
    src: galeria6,
    alt: "Momento especial en vivo",
    layout: "wide"
  },
  {
    src: galeria7,
    alt: "Presentación con energía",
    layout: "tall"
  }
];

const Galeria = () => {
  return (
    <section id="galeria" className="galeria">
      <div className="galeria__header">
        <p className="galeria__eyebrow">Galería</p>
        <h2 className="galeria__title">Videos destacados</h2>
        <div className="galeria__divider"></div>
      </div>

      <div className="galeria__grid">
        {videos.map((id, index) => (
          <div className="galeria__card" key={`${id}-${index}`}>
            <div className="galeria__frame">
              <iframe
                src={`https://www.youtube.com/embed/${id}`}
                title={`Video ${index + 1}`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                loading="lazy"
              />
            </div>
            <div className="galeria__badge">#{index + 1}</div>
          </div>
        ))}
      </div>

      <div className="galeria__cta">
        <a
          className="galeria__button"
          href="https://www.youtube.com/@BandaShowlaProvincialCoracora"
          target="_blank"
          rel="noreferrer"
        >
          Ver más en YouTube
        </a>
      </div>

      <div className="galeria__photos">
        <div className="galeria__photos-header">
          <h3 className="galeria__section-title">Momentos destacados</h3>
          <div className="galeria__photos-divider"></div>
        </div>

        <div className="galeria__photos-grid">
          {photos.map((photo, index) => (
            <figure
              className={`galeria__photo-card ${photo.layout ? `is-${photo.layout}` : ""}`}
              key={`${photo.src}-${index}`}
            >
              <div className="galeria__photo-frame">
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </div>
            </figure>
          ))}
        </div>

        <div className="galeria__cta">
          <a
            className="galeria__button"
            href="https://www.facebook.com/profile.php?id=100088658712135"
            target="_blank"
            rel="noreferrer"
          >
            Ver más momentos destacados
          </a>
        </div>
      </div>
    </section>
  );
};

export default Galeria;
