import { createHashRouter } from "react-router-dom";
import App from "../App";
import Inicio from "../pages/inicio";
import Repertorio from "../pages/repertorio";
import Contratos from "../pages/contratos";
import Error404 from "../pages/error404";

export const routes = createHashRouter([
  {
    path: "/",
    Component: App,
    children: [
      { path: "/", Component: Inicio },
      { path: "repertorio", Component: Repertorio },
      { path: "contratos", Component: Contratos },
      { path: "*", Component: Error404 },
    ],
  },
]);
