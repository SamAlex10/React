import React, { useState } from 'react';

const GokuTransformation = () => {
  const [transformation, setTransformation] = useState('Kaioken');

  const toggleTransformation = () => {
    setTransformation((prevTransformation) =>
      prevTransformation === 'Kaioken' ? 'SuperSaiyan' : 'Kaioken'
    );
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h1>Goku's Current Transformation: {transformation}</h1>
      <button onClick={toggleTransformation} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Toggle Transformation
      </button>
    </div>
  );
};

export default GokuTransformation;
