import React, { useState } from 'react';
import { ErrorBoundary } from 'react-error-boundary';

const FallbackComponent = () => (
  <div role="alert">
    <p>Something went wrong. Please try again later.</p>
  </div>
);

const FormValidation = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [errors, setErrors] = useState({ name: '', email: '' });

  const validateName = (name) => /^[A-Za-z\s]+$/.test(name);
  
  const validateEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    let nameError = '';
    let emailError = '';

    if (!validateName(name)) {
      nameError = 'Name must contain only alphabets.';
    }

    if (!validateEmail(email)) {
      emailError = 'Email must be in the format *****@****.**.';
    }

    if (nameError || emailError) {
      setErrors({ name: nameError, email: emailError });
      return;
    }

    // Proceed with form submission logic
    alert('Form submitted successfully!');
  };

  return (<div>
    <h2 style={{ textAlign: 'center', padding: '50px', backgroundColor: 'black',marginTop:'0px', color: 'white' }}>Form Validation</h2>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <div style={{
        textAlign: 'center',
        padding: '30px',
        border: '2px solid black',
        backgroundColor: 'white', // Background color for the form box
        borderRadius: '8px' // Rounded corners for aesthetics
      }}>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Username</label><br />
            <input 
              type="text" 
              value={name} 
              onChange={(e) => setName(e.target.value)} 
              style={{ marginBottom: '10px', padding: '5px' }}
            />
            {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
          </div><br />
          <div>
            <label>Email</label><br />
            <input 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              style={{ marginBottom: '10px', padding: '5px' }}
            />
            {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
          </div><br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
    </div>
  );
};

const Former = () => (
  <ErrorBoundary FallbackComponent={FallbackComponent}>
    <FormValidation />
  </ErrorBoundary>
);

export default Former;
