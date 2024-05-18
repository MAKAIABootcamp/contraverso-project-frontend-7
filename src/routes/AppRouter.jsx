import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Routes, Route, useLocation } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase/firebaseConfig";
import { login } from "../app/features/userAuth/userAuthSlice";
import Layout from "../components/Layout/Layout";
import Inicio from "../pages/Inicio/Inicio";
import Chequea from "../pages/Chequea/Chequea";
import Confronta from "../pages/Confronta/Confronta";
import Expresa from "../pages/Expresa/Expresa";
import Aprende from "../pages/Aprende/Aprende";
import Contacto from "../pages/Contacto/Contacto";
import Acceso from "../pages/Acceso/Acceso";
import PublicRoutes from "./PublicRoutes";
import IniciarSesion from "../pages/Acceso/IniciarSesion";
import Verificacion from "../pages/Acceso/Verificacion";

const AppRouter = () => {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { user } = useSelector((store) => store.userAuth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    onAuthStateChanged(auth, (userCredential) => {
      if (userCredential && !user) {
        dispatch(
          login({
            id: userCredential.uid,
            name: userCredential.displayName,
            photo: userCredential.photoURL,
            accessToken: userCredential.accessToken,
            email: userCredential.email || null,
            phone: userCredential.phoneNumber || null,
          })
        );
      }
    });
  }, [user, dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Inicio />} />
        <Route path="chequea" element={<Chequea />} />
        <Route path="confronta" element={<Confronta />} />
        <Route path="expresa" element={<Expresa />} />
        <Route path="aprende" element={<Aprende />} />
        <Route path="contacto" element={<Contacto />} />
      </Route>
      {/* Implementar la protección de rutas, si esta logeado no debe usar ese login */}
      <Route element={<PublicRoutes />}>
        <Route
          path="YWNjZXNvIGFsIGxvZ2luIGRlbCBhZG1pbg=="
          element={<Acceso />}
        />
        <Route path="iniciarsesion" element={<IniciarSesion />} />
        <Route path="verificacion" element={<Verificacion />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
