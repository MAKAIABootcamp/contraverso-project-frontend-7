import { useSelector } from 'react-redux';

const AnalisisDigital = () => {
    const data = useSelector((store) => store.filtersByButtons.data.analisisDigital);
    const loading = useSelector((store) => store.filtersByButtons.store);
    const error = useSelector((store)=> !!store.filtersByButtons.store);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const analisisDigitalData = data.filter(item => item.category === 'analisisDigital');

  return (
    <div>
      {analisisDigitalData.length > 0 ? (
        analisisDigitalData.map(item => (
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

export default AnalisisDigital;