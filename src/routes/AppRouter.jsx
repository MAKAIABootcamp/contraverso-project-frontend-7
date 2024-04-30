import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Inicio from "../pages/Inicio/Inicio";
import Chequea from "../pages/Chequea/Chequea";
import Confronta from "../pages/Confronta/Confronta";
import Expresa from "../pages/Expresa/Expresa";
import Aprende from "../pages/Aprende/Aprende";
import Contacto from "../pages/Contacto/Contacto";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Inicio />} />
          <Route path="confronta" element={<Confronta />} />
          <Route path="expresa" element={<Expresa />} />
          <Route path="aprende" element={<Aprende />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
          <Route path="chequea" element={<Chequea />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
