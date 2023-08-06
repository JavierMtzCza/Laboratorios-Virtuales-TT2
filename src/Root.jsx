import { createBrowserRouter} from "react-router-dom";

import PA1Inicio from "./routes/PA1-Inicio";
import PA2InicioSesion from "./routes/PA2-InicioSesion"
import PA3Registro from "./routes/PA3-Registro"
import PA4Laboratorios from "./routes/PA4-Laboratorios"
import PA5Grupos from "./routes/PA5-Grupos"

const router = createBrowserRouter([
   {
     path: "/",
     element: <PA1Inicio/>,
   },
   {
      path: "/SingIn",
      element: <PA2InicioSesion/>
   },
   {
      path: "/SingUp",
      element: <PA3Registro/>
   },
   {
      path: "/Labs",
      element: <PA4Laboratorios/>
   },
   {
      path: "/Groups",
      element: <PA5Grupos/>
   },
 ]);

 export default router