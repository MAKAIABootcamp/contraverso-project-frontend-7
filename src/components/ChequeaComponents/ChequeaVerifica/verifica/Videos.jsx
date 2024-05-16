import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../../../../app/features/filtersByButtons/filtersByButtonsActions';
import styled from 'styled-components';
import { useEffect } from 'react';

const DivStyledTres = styled.div`
    background-color: green;
`;


const Videos = () => {
  const dispatch = useDispatch();
  const carouselVideos = useSelector(store => store.filtersByButtons.data);
  const isLoading = useSelector(store => store.filtersByButtons.loading);
  const hasError = useSelector(store => !!store.filtersByButtons.error);

  useEffect(()=>{
    dispatch(getData('verificaVideos'));
  }, [dispatch]);

  if(isLoading) {
    return <DivStyledTres>Cargando...</DivStyledTres>;
  }

  if(hasError) {
    return <DivStyledTres>Error: {store.filtersByButtons.error}</DivStyledTres>
  }

  return (
    <DivStyledTres >
      <h2>Videos</h2>
      {carouselVideos.map((data)=>(
        <div key={data.id}>
            <h3>{data.category}</h3>
            <p>Description: {data.description}</p>
            <img src={data.poster} alt={data.description} />
            <p>URL: {data.url}</p>
            <p>Web Name: {data.webName}</p>
        </div>
      ))}
    </DivStyledTres >
  );
}

export default Videos;
