import React, { useState } from 'react';

const ToggleMessage = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={toggleVisibility}>
        {isVisible ? 'Hide Component' : 'Show Component'}
      </button>
      {isVisible && (
        <p style={{ marginTop: '20px', fontSize: '18px' }}>
          Hi! How are You!!!
        </p>
      )}
    </div>
  );
};

export default ToggleMessage;
