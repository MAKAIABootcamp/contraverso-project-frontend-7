import { useSelector } from 'react-redux';

const BusquedaInversa = () => {
  const data = useSelector((store) => store.filtersByButtons.data.busquedaInversa);
  const loading = useSelector((store) => store.filtersByButtons.store);
  const error = useSelector((store)=> !!store.filtersByButtons.store);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const busquedaInversaData = data.filter(item => item.category === 'busquedaInversa');

  return (
    <div>
      {busquedaInversaData.length > 0 ? (
        busquedaInversaData.map(item => (
          <div key={item.id}>
          <h3>{item.category}</h3>
          <p>Description: {item.description}</p>
          <img src={item.poster} alt={item.description} />
          <p>URL: {item.url}</p>
          <p>Web Name: {item.webName}</p>
        </div>
        ))
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
}

export default BusquedaInversa;