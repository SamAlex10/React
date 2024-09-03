import React, { useState } from 'react';
import { TextField, Button, Autocomplete, Box } from '@mui/material';

const fruitOptions = ['Apple', 'Banana', 'Cherry', 'Durian', 'Elderberry'];

const FruitSurvey = () => {
  const [name, setName] = useState('');
  const [favoriteFruit, setFavoriteFruit] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessage(`Hello, ${name}! Your favorite fruit is ${favoriteFruit}.`);
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <TextField
        label="Name"
        data-testid="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Autocomplete
        data-testid="autocomplete"
        options={fruitOptions}
        renderInput={(params) => <TextField {...params} label="Choose a fruit" />}
        value={favoriteFruit}
        onChange={(event, newValue) => setFavoriteFruit(newValue)}
      />
      <Button type="submit" data-testid="button" variant="contained">
        Submit
      </Button>
      {message && <p>{message}</p>}
    </Box>
  );
};

export default FruitSurvey;
