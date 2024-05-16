import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import styled from 'styled-components';
import { useEffect } from 'react';

const DivStyled = styled.div`
    background-color: #f00;
`;

const RedesSociales = () => {
  const dispatch = useDispatch();
  const carouselRedesSociales = useSelector(store => store.filtersByButtons.data);
  const isLoading = useSelector(store => store.filtersByButtons.loading);
  const hasError = useSelector(store => !!store.filtersByButtons.error);

  useEffect(()=>{
    dispatch(getData('verificaRedesSociales'));
  }, [dispatch]);

  if(isLoading) {
    return <DivStyled>Cargando...</DivStyled>;
  }

  if(hasError) {
    return <DivStyled>Error: {store.filtersByButtons.error}</DivStyled>
  }

  return (
    <DivStyled>
      <h2>RedesSociales</h2>
      {carouselRedesSociales.map((data)=>(
        <div key={data.id}>
            <h3>{data.category}</h3>
            <p>Description: {data.description}</p>
            <img src={data.poster} alt={data.description} />
            <p>URL: {data.url}</p>
            <p>Web Name: {data.webName}</p>
        </div>
      ))}
    </DivStyled>
  );
}

export default RedesSociales;
