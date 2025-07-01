import React, { useEffect, useState } from 'react';
import logo from './sunny-logo.png';
import './App.css';
import { WeatherForecast } from './types';

function App() {
  const [weatherForecast, setWeatherForecast] = useState<WeatherForecast[]>([]);

  useEffect(() => {
    fetch('http://localhost:5093/weatherforecast')
      .then(res => res.json())
      .then((data: WeatherForecast[]) => setWeatherForecast(data))
      .catch(err => console.error('Failed to fetch weather data:', err));
  }, []);

  const getColor = (summary: string) => {
    switch (summary) {
      case "Freezing":
      case "Bracing":
      case "Chilly":
        return "#00aaff";
      case "Cool":
      case "Mild":
      case "Warm":
        return "#ffaa00";
      case "Balmy":
      case "Hot":
      case "Sweltering":
      case "Scorching":
        return "#ff4444";
      default:
        return "#999";
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{ marginBottom: '1rem' }}>5-Day Weather Forecast</h1>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {weatherForecast.map((forecast, index) => (
            <div
              key={index}
              style={{
                backgroundColor: getColor(forecast.summary),
                padding: '1rem',
                borderRadius: '12px',
                width: '180px',
                boxShadow: '0 4px 10px rgba(0,0,0,0.2)',
                textAlign: 'center',
                color: 'white',
                fontFamily: 'sans-serif',
              }}
            >
              <h2 style={{ margin: '0.5rem 0' }}>{new Date(forecast.date).toDateString()}</h2>
              <p style={{ fontSize: '2rem', margin: '0.5rem 0' }}>{forecast.temperatureC}°C</p>
              <p style={{ fontSize: '1.2rem', margin: 0 }}>({forecast.temperatureF}°F)</p>
              <p style={{ fontStyle: 'italic', marginTop: '0.5rem' }}>{forecast.summary}</p>
            </div>
          ))}
        </div>
      </header>
    </div>
  );
}

export default App;