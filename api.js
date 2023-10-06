async function fetchWeatherData() {
  const accessKey = '8089e9523a6e251687a69a6205850cd5';
  const location = 'Tonsberg';
  const apiUrl = `http://api.weatherstack.com/current?access_key=${accessKey}&query=${location}`;
  
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}

async function displayWeatherData() {
  try {
    const weatherData = await fetchWeatherData();

    // Access the elements in your HTML to display the data
    const weatherInfoDiv = document.getElementById('weather-info');
    weatherInfoDiv.innerHTML = `
      <h2>Weather in ${weatherData.location.name}, ${weatherData.location.country}</h2>
      <p>Temperature: ${weatherData.current.temperature}°C</p>
      <p>Weather: ${weatherData.current.weather_descriptions.join(', ')}</p>
    `;
  } catch (error) {
    console.error('Error:', error);
  }
}

// Call the function to start fetching and displaying weather data
displayWeatherData();

