import { useDispatch } from 'react-redux';
import { getDataFiltered } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import AnalisisDigital from "./ImagenCarousels/AnalisisDigital";
import BusquedaInversa from "./ImagenCarousels/BusquedaInversa";
import Metadatos from "./ImagenCarousels/MetadatosImg";
import { useEffect } from 'react';

const Imagenes = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'metadatos' }));
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'analisisDigital' }));
    dispatch(getDataFiltered({ collectionName: 'verificaImagenes', filterValue: 'busquedaInversa' }));
  }, [dispatch]);

  return (
    <>
      <h2>Imagenes</h2>
      <Metadatos />
      <BusquedaInversa />
      <AnalisisDigital />
    </>
  );
}

export default Imagenes;