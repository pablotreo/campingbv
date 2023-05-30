import React, { useEffect, useState } from 'react';

const WeatherComponent = () => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // Función para hacer la llamada a la API del tiempo
    const fetchWeatherData = async () => {
      try {
        const response = await fetch('https://api.open-meteo.com/v1/forecast?latitude=-30.42&longitude=-69.24&hourly=temperature_2m&current_weather=true&timeformat=unixtime&forecast_days=1&timezone=America%2FSao_Paulo');
        const data = await response.json();
        setWeatherData(data); // Almacena los datos obtenidos en el estado
      } catch (error) {
        console.error('Error al obtener los datos del tiempo:', error);
      }
    };

    fetchWeatherData(); // Llama a la función de obtención de datos del tiempo al cargar el componente
  }, []);

  return (
    <div>
      {weatherData ? (
        <div>
          {/* Mostrar los datos del tiempo obtenidos */}
          <p className='text-decoration-none'>
            Temperatura: {weatherData.current_weather.temperature}°C <br/>
            Velocidad Viento: {weatherData.current_weather.windspeed}km/h<br/>
            Altitud: {weatherData.elevation}msnm 
          </p>
        </div>
      ) : (
        <p>Cargando datos del tiempo...</p>
      )}
    </div>
  );
};

export default WeatherComponent;
