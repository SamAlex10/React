import React, { useState } from 'react';
import { Card, CardContent, Typography, TextField, Button } from '@mui/material';

const Weather = () => {
  const [location, setLocation] = useState('');
  const [weatherData, setWeatherData] = useState({
    temperature: 0,
    condition: '',
  });
  const [previousWeatherData, setPreviousWeatherData] = useState(null); // State to hold previous weather data
  const [tempInput, setTempInput] = useState(''); // State for temperature input
  const [conditionInput, setConditionInput] = useState(''); // State for condition input
  const [isNewLocation, setIsNewLocation] = useState(false); // State to track if it's a new location

  const handleLocationChange = (newLocation) => {
    setLocation(newLocation);
    setIsNewLocation(true); // Set to true when a new location is entered
    updateWeatherData(newLocation);
  };

  const handleTempChange = (e) => {
    setTempInput(e.target.value);
  };

  const handleConditionChange = (e) => {
    setConditionInput(e.target.value);
  };

  const updateWeatherData = (loc) => {
    // Update weather data based on the location
    let temperature, condition;
    switch (loc.toLowerCase()) {
      case 'london':
        temperature = 15;
        condition = 'Cloudy';
        break;
      case 'tokyo':
        temperature = 25;
        condition = 'Sunny';
        break;
      case 'new york':
        temperature = 20;
        condition = 'Rainy';
        break;
      default:
        // If it's a new location, use the user input for temperature and condition
        temperature = parseFloat(tempInput) || 0; // Default to 0 if input is invalid
        condition = conditionInput || 'Unknown'; // Default to 'Unknown' if input is empty
        break;
    }

    // Save the current weather data before updating
    setPreviousWeatherData(weatherData);
    setWeatherData({ temperature, condition });
    
    // Reset inputs and state if new data is added
    if (isNewLocation) {
      setTempInput('');
      setConditionInput('');
      setIsNewLocation(false);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Weather Application
      </Typography>
      <TextField
        label="Enter location"
        variant="outlined"
        value={location}
        onChange={(e) => handleLocationChange(e.target.value)}
        style={{ marginBottom: '20px' }}
      />
      {isNewLocation && (
        <div>
          <TextField
            label="Enter temperature (°C)"
            variant="outlined"
            value={tempInput}
            onChange={handleTempChange}
            style={{ marginBottom: '10px', marginRight: '10px' }}
          />
          <TextField
            label="Enter condition"
            variant="outlined"
            value={conditionInput}
            onChange={handleConditionChange}
            style={{ marginBottom: '20px' }}
          />
          <Button
          color='black'
            variant="contained"
            onClick={() => updateWeatherData(location)
            }
          >
            Save Weather
          </Button>
        </div>
      )}

      {/* Current Weather Data */}
      <Card sx={{ maxWidth: 500, margin: '50px auto' }}>
        <CardContent>
          <Typography variant="h5" component="div">
            Current Weather in {location || 'Your Location'}
          </Typography>
          <Typography variant="h6" color="text.secondary">
           Temperature :  {weatherData.temperature}°C
          </Typography>
          <Typography variant="body2">Condition : {weatherData.condition}</Typography>
        </CardContent>
      </Card>

      
    </div>
  );
};

export default Weather;
