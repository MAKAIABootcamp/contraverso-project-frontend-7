import { Routes, Route, useLocation } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Inicio from "../pages/Inicio/Inicio";
import Chequea from "../pages/Chequea/Chequea";
import Confronta from "../pages/Confronta/Confronta";
import Expresa from "../pages/Expresa/Expresa";
import Aprende from "../pages/Aprende/Aprende";
import Contacto from "../pages/Contacto/Contacto";
import { useEffect } from "react";
import Acceso from "../pages/Login/Acceso";

const AppRouter = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="inicio" element={<Inicio />} />
          <Route path="chequea" element={<Chequea />} />
          <Route path="confronta" element={<Confronta />} />
          <Route path="expresa" element={<Expresa />} />
          <Route path="aprende" element={<Aprende />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
          <Route index element={<Acceso />} />
      </Routes>
  );
};

export default AppRouter;
