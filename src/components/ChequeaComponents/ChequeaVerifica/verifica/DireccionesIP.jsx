import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getData } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import styled from 'styled-components';

const DivStyledDos = styled.div`
    background-color: yellow;
`;

const DireccionesIP = () => {
  const dispatch = useDispatch();
  const carouselDireccionesIP = useSelector(store => store.filtersByButtons.data);
  const isLoading = useSelector(store => store.filtersByButtons.loading);
  const hasError = useSelector(store => !!store.filtersByButtons.error);

  useEffect(()=>{
    dispatch(getData('verificaDireccionesIP'));
  }, [dispatch]);

  if(isLoading) {
    return <DivStyledDos>Cargando...</DivStyledDos>;
  }

  if(hasError) {
    return <DivStyledDos>Error: {store.filtersByButtons.error}</DivStyledDos>
  }
  return (
    <DivStyledDos>
      <h2>DireccionesIP</h2>
      {carouselDireccionesIP.map((data)=>(
        <div key={data.id}>
            <h3>{data.category}</h3>
            <p>Description: {data.description}</p>
            <img src={data.poster} alt={data.description} />
            <p>URL: {data.url}</p>
            <p>Web Name: {data.webName}</p>
        </div>
      ))}
    </DivStyledDos>
  );
}

export default DireccionesIP;
