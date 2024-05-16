import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import styled from 'styled-components';
import { useEffect } from 'react';

const DivStyledCuatro = styled.div`
    background-color: blue;
`;

const Imagenes = () => {
  const dispatch = useDispatch();
  const carouselImagenes = useSelector(state => state.filtersByButtons.data);
  const isLoading = useSelector(state => state.filtersByButtons.loading);
  const hasError = useSelector(state =>!!state.filtersByButtons.error);

  useEffect(() => {
    dispatch(getData('verificaImagenes'));
  }, [dispatch]);

  if (isLoading) {
    return <DivStyledCuatro>Cargando...</DivStyledCuatro>;
  }

  if (hasError) {
    return <DivStyledCuatro>Error: {state.filtersByButtons.error}</DivStyledCuatro>;
  }

  return (
    <DivStyledCuatro>
      <h2>Imagenes</h2>
      <div>
        {carouselImagenes.map((data) => (
          <div key={data.id}>
            <h3>{data.category}</h3>
            <p>Description: {data.description}</p>
            <img src={data.poster} alt={data.description} />
            <p>URL: {data.url}</p>
            <p>Web Name: {data.webName}</p>
          </div>
        ))}
      </div>
    </DivStyledCuatro>
  );
}

export default Imagenes;
