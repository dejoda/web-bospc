import "./style/galeria.css";

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
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/514485774_23873832725591789_7816616652860051771_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=zfBAGRYH6DcQ7kNvwGdGfgo&_nc_oc=Adn2ucfons4-g-hxpcLD22o2kBeAaWyXBDUqUQFSQxjX_B2BGJiwhl1mMVLSYOVzXKQ&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=k22VJkGrOBb2n1zKqxxfSw&oh=00_AfpP9wQUrK9nUFPXy6Z2Xy-4bcmyDOYz4o3vz-zRpmbziA&oe=697DDBC9",
    alt: "Banda en presentación en vivo",
    layout: "wide"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/514372546_23871896545785407_6404244346700450405_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=y4Aq5BxVvggQ7kNvwEV5lRk&_nc_oc=AdlrFAuSrJ-HdziJzf0WdnwIqDaZSbo97VMum5xA9ta49EU-M9ltAhv9csttKjBHOP4&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=kheeTUMyKntu-krznY7k3Q&oh=00_Afrv4-3RYBuEuAS1c1D6Je_LZGh0wUyRW2r0TxiUyF1bLw&oe=697DF1EF",
    alt: "Foto grupal de la banda",
    layout: "tall"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/525170417_24095070736801319_5277223655565454968_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=yw5Jk9EKnfsQ7kNvwEeqFCm&_nc_oc=AdmZE34R_Vp6GlC-h6R2YBCX0rMIj_Fyk7WGYg1QrjL14-AsMA4Rnn5sVPLgelf_CJA&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=Y96CCQaOQIDoIQPFfzcL_A&oh=00_AfoTZ48Kk1LHFzRTXszZFoz265GGbO3l6t0GFytFORhrIQ&oe=697DD666",
    alt: "Evento especial con la banda",
    layout: "wide"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/514327853_23866781592963569_5709753281253361971_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=KCHjxx5DbXIQ7kNvwGEOKtG&_nc_oc=AdnM8goBVxnFU2gsPq0lYfclbpIOSsoVpo2R7a1wtTo6qEjGwXs0105cp-D02CLC3b8&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=fChqtWIK8jyyj2-rVx8A8Q&oh=00_AfpgGNSElMleg9Yg5OoHXexmFxUNQ27idKCoRetLPRBJ6g&oe=697DFE3B",
    alt: "Performance al aire libre",
    layout: "tall"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/493446095_9619712611430372_9190851625518838175_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_ohc=oGlqmG32QcsQ7kNvwHIeSEI&_nc_oc=AdnclCsJ7e_EAGxUWTJcWClSPukdzGVsLaedI2FA3sOMbiz7ZNFN_MybrxNtBkvJGPk&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=xV8JY_cf_SzPgMYKRtSrxA&oh=00_AfoXlu_XDrgDA1cOxYw1E9v7kbLLmhokUSMCP5KBGux_WQ&oe=697DDFB7",
    alt: "La banda en concierto nocturno",
    layout: "square"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/492932832_9604895479578752_3346812104124123840_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Pwe0l7Ao8mIQ7kNvwFgFvRr&_nc_oc=AdlzSDSks6Xx8tVGHFAYuTDetqSZuVnjLCWFLhjzOqUnD1rOIk4fGnGzPd7qwhZLJEo&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=jrPCtXc4S8gGi5DcJUZbUQ&oh=00_Afr6lNbaR8akx9oI744-wTeYNagARyxZd2t8Tg0K8voLkQ&oe=697DFBA8",
    alt: "Momento especial en vivo",
    layout: "wide"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t39.30808-6/494530699_9629604620441171_8419826783812028035_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=833d8c&_nc_ohc=16bSHoKsGoIQ7kNvwHf2L4w&_nc_oc=Adk-QvKnY2IHHvYBAOjF5SebPxfWaF7V7lMZkvORa58BH4Whq1A2mAYXRIIY9LIrXR4&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=cDxsKeyHGmKjJIQeC02INA&oh=00_AfpEx1udHXUZoJzEkMdQO6mhqMvLvhSlXEfIznzKHjI5UA&oe=697DDDA5",
    alt: "Presentación con energía",
    layout: "tall"
  },
  {
    src: "https://scontent-lim1-1.xx.fbcdn.net/v/t1.6435-9/39389266_1833366450065066_9077324156445392896_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=833d8c&_nc_ohc=LbrUjFOLvVkQ7kNvwGKDJ1V&_nc_oc=AdldEypF_0cRtvWWfdLwcwprLANq3pGiWLUkHkvDojyEfDSTDjhc6RhdpFp9GjmIgck&_nc_zt=23&_nc_ht=scontent-lim1-1.xx&_nc_gid=I7htwOujwmrf3K25o4VZDw&oh=00_Afq3_04zrTTeoPlUfsqa55g907pIBentJ2EvcZt_Nr696Q&oe=699F9BA5",
    alt: "Evento memorable",
    layout: "square"
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
          <h3 className="galeria__section-title">Fotos destacadas</h3>
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
      </div>
    </section>
  );
};

export default Galeria;
