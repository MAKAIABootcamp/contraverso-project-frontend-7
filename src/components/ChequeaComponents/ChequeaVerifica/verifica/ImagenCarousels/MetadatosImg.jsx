import React from 'react';
import { useSelector } from 'react-redux';

const MetadatosImg = () => {
  const data = useSelector((store) => store.filtersByButtons.data.metadatos);
  const loading = useSelector((store) => store.filtersByButtons.loading);
  const error = useSelector((store) => store.filtersByButtons.error);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {data.length > 0 ? (
        data.map(item => (
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
};

export default MetadatosImg;
