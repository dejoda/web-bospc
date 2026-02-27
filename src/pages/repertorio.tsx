import { useEffect, useState } from "react";
import "./style/repertorio.css";

interface Cancion {
  id: number;
  titulo: string;
  artista: string;
  genero: string;
  departamento: string;
}

const repertorioData: Cancion[] = [
  // Cumbias
  { id: 1, titulo: "Cerveza, Ron y Trago", artista: "Agua Marina", genero: "Cumbia", departamento: "Nacional" },
  { id: 2, titulo: "Mix Agua Marina", artista: "Agua Marina", genero: "Cumbia", departamento: "Nacional" },
  { id: 3, titulo: "Paloma Ajena", artista: "Grupo 5", genero: "Cumbia", departamento: "Nacional" },
  { id: 4, titulo: "La Misma Historia", artista: "Armonía 10", genero: "Cumbia", departamento: "Nacional" },
  { id: 5, titulo: "Por Qué Te Fuiste", artista: "Los Ángeles de Charly", genero: "Cumbia", departamento: "Nacional" },
  { id: 6, titulo: "Basta Ya", artista: "Grupo 5", genero: "Cumbia", departamento: "Nacional" },
  { id: 7, titulo: "Mix Movido", artista: "Armonía 10", genero: "Cumbia", departamento: "Nacional" },
  { id: 8, titulo: "Si Te Vas", artista: "Corazón Serrano", genero: "Cumbia", departamento: "Nacional" },
  { id: 9, titulo: "Llora Corazón", artista: "Agua Bella", genero: "Cumbia", departamento: "Nacional" },
  { id: 10, titulo: "Y Lloras", artista: "Grupo Néctar", genero: "Cumbia", departamento: "Nacional" },

  // Huaynos Ayacucho
  { id: 11, titulo: "Valicha", artista: "Tradicional", genero: "Huayno", departamento: "Ayacucho" },
  { id: 12, titulo: "El Cóndor Pasa", artista: "Tradicional", genero: "Huayno", departamento: "Ayacucho" },
  { id: 13, titulo: "Flor de Retama", artista: "Tradicional", genero: "Huayno", departamento: "Ayacucho" },
  { id: 14, titulo: "Virgenes del Sol", artista: "Tradicional", genero: "Huayno", departamento: "Ayacucho" },
  { id: 15, titulo: "Adiós Pueblo de Ayacucho", artista: "Tradicional", genero: "Huayno", departamento: "Ayacucho" },
  { id: 16, titulo: "Carnaval Ayacuchano", artista: "Tradicional", genero: "Carnaval", departamento: "Ayacucho" },

  // Huaynos Cusco
  { id: 17, titulo: "Urpillay", artista: "Tradicional", genero: "Huayno", departamento: "Cusco" },
  { id: 18, titulo: "Machu Picchu", artista: "Tradicional", genero: "Huayno", departamento: "Cusco" },

  // Carnavales Cajamarca
  { id: 19, titulo: "El Cajamarquino", artista: "Tradicional", genero: "Carnaval", departamento: "Cajamarca" },
  { id: 20, titulo: "Carnaval de Cajamarca", artista: "Tradicional", genero: "Carnaval", departamento: "Cajamarca" },
  { id: 21, titulo: "Linda Cajamarquina", artista: "Tradicional", genero: "Carnaval", departamento: "Cajamarca" },

  // Huaynos Puno
  { id: 22, titulo: "Vaso de Vino", artista: "Tradicional", genero: "Huayno", departamento: "Puno" },
  { id: 23, titulo: "Puno, Mi Tierra", artista: "Tradicional", genero: "Huayno", departamento: "Puno" },

  // Salsa
  { id: 24, titulo: "Vivir Mi Vida", artista: "Marc Anthony", genero: "Salsa", departamento: "Internacional" },
  { id: 25, titulo: "Aquel Lugar", artista: "Grupo Niche", genero: "Salsa", departamento: "Internacional" },
  { id: 26, titulo: "La Rebelión", artista: "Joe Arroyo", genero: "Salsa", departamento: "Internacional" },
  { id: 27, titulo: "Que Locura Enamorarme de Ti", artista: "Eddie Santiago", genero: "Salsa", departamento: "Internacional" },
  { id: 28, titulo: "Llorarás", artista: "Óscar D'León", genero: "Salsa", departamento: "Internacional" },
  { id: 29, titulo: "Amor y Control", artista: "Rubén Blades", genero: "Salsa", departamento: "Internacional" },

  // Baladas/Románticas
  { id: 30, titulo: "Tu Amor Fue una Mentira", artista: "Grupo 5", genero: "Balada", departamento: "Nacional" },
  { id: 31, titulo: "La Última Canción", artista: "Agua Marina", genero: "Balada", departamento: "Nacional" },
  { id: 32, titulo: "Por Amarte Así", artista: "Cristian Castro", genero: "Balada", departamento: "Internacional" },
  { id: 33, titulo: "Como Yo Te Amo", artista: "Raphael", genero: "Balada", departamento: "Internacional" },
  { id: 34, titulo: "Y Hubo Alguien", artista: "Marc Anthony", genero: "Balada", departamento: "Internacional" },

  // Otros géneros
  { id: 35, titulo: "Chica Sexy", artista: "Tony Rosado", genero: "Tecnocumbia", departamento: "Nacional" },
  { id: 36, titulo: "Dile La Verdad", artista: "Tony Rosado", genero: "Tecnocumbia", departamento: "Nacional" },
  { id: 37, titulo: "Mix Tropical", artista: "Varios", genero: "Tropical", departamento: "Nacional" },
  { id: 38, titulo: "Marinera Norteña", artista: "Tradicional", genero: "Marinera", departamento: "La Libertad" },
  { id: 39, titulo: "Tondero", artista: "Tradicional", genero: "Marinera", departamento: "Piura" },
];

const generos = ["Todos", "Cumbia", "Huayno", "Salsa", "Balada", "Carnaval", "Tecnocumbia", "Tropical", "Marinera"];
const departamentos = ["Todos", "Ayacucho", "Cajamarca", "Cusco", "Puno", "La Libertad", "Piura", "Nacional", "Internacional"];

const Repertorio = () => {
  const [generoActivo, setGeneroActivo] = useState("Todos");
  const [departamentoActivo, setDepartamentoActivo] = useState("Todos");
  const [busqueda, setBusqueda] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cancionesFiltradas = repertorioData.filter((cancion) => {
    const matchGenero = generoActivo === "Todos" || cancion.genero === generoActivo;
    const matchDepartamento = departamentoActivo === "Todos" || cancion.departamento === departamentoActivo;
    const matchBusqueda =
      busqueda === "" ||
      cancion.titulo.toLowerCase().includes(busqueda.toLowerCase()) ||
      cancion.artista.toLowerCase().includes(busqueda.toLowerCase());

    return matchGenero && matchDepartamento && matchBusqueda;
  });

  return (
    <div className="repertorio">
      {/* Header */}
      <div className="repertorio__header">
        <p className="repertorio__eyebrow">Nuestro Repertorio</p>
        <h1 className="repertorio__title">Catálogo musical completo</h1>
        <p className="repertorio__description">
          Explora nuestro extenso repertorio con más de 100 canciones organizadas por género y región de origen.
        </p>
        <div className="repertorio__divider"></div>
      </div>

      {/* Filtros y búsqueda */}
      <section className="repertorio__filtros">
        <div className="repertorio__busqueda">
          <input
            type="text"
            placeholder="🔍 Buscar por canción o artista..."
            value={busqueda}
            onChange={(e) => setBusqueda(e.target.value)}
            className="repertorio__busqueda-input"
          />
        </div>

        <div className="repertorio__filtro-grupo">
          <h3 className="repertorio__filtro-titulo">Por Género Musical</h3>
          <div className="repertorio__tabs">
            {generos.map((genero) => (
              <button
                key={genero}
                className={`repertorio__tab ${generoActivo === genero ? "active" : ""}`}
                onClick={() => setGeneroActivo(genero)}
              >
                {genero}
              </button>
            ))}
          </div>
        </div>

        <div className="repertorio__filtro-grupo">
          <h3 className="repertorio__filtro-titulo">Por Región / Origen</h3>
          <div className="repertorio__tabs">
            {departamentos.map((departamento) => (
              <button
                key={departamento}
                className={`repertorio__tab ${departamentoActivo === departamento ? "active" : ""}`}
                onClick={() => setDepartamentoActivo(departamento)}
              >
                {departamento}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Lista de canciones */}
      <section className="repertorio__lista">
        <div className="repertorio__lista-header">
          <h2 className="repertorio__section-title">
            {cancionesFiltradas.length} {cancionesFiltradas.length === 1 ? "Canción" : "Canciones"}
          </h2>
        </div>
        <div className="repertorio__grid">
          {cancionesFiltradas.map((cancion) => (
            <div key={cancion.id} className="repertorio__card">
              <div className="repertorio__card-content">
                <h3 className="repertorio__card-titulo">{cancion.titulo}</h3>
                <p className="repertorio__card-artista">{cancion.artista}</p>
                <div className="repertorio__card-tags">
                  <span className="repertorio__card-tag repertorio__card-tag--genero">{cancion.genero}</span>
                  <span className="repertorio__card-tag repertorio__card-tag--departamento">{cancion.departamento}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
        {cancionesFiltradas.length === 0 && (
          <div className="repertorio__empty">
            <p>No se encontraron canciones con los filtros aplicados.</p>
          </div>
        )}
      </section>
    </div>
  );
};

export default Repertorio;
