import Scroll from "../utils/scroll";
import Spam from "../utils/spam";
import Galeria from "./components-inicio/galeria";
import Hero from "./components-inicio/hero";
import Nosotros from "./components-inicio/nosotros";
import "./style/inicio.css";

const Inicio = () => {
  return (
    <>
      <section id="hero">
        <Hero></Hero>
      </section>
      <section id="nosotros">
        <Nosotros></Nosotros>
      </section>
      <section id="galeria">
        <Galeria></Galeria>
      </section>
      <Scroll></Scroll>
      <Spam></Spam>
    </>
  );
};

export default Inicio;
