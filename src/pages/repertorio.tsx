import { useEffect } from "react";
import Mantenimiento from "./mantenimiento";


const Repertorio = () => {
  // Scroll al tope cuando se monta el componente
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
    <Mantenimiento></Mantenimiento>
    </>
  );
};

export default Repertorio;
