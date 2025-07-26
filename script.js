document.addEventListener("DOMContentLoaded", () => {
    const cityId = document.getElementById("place-input"); 
    const getWeatherBtn = document.getElementById("get-weather-btn"); 
    const weatherInfo = document.getElementById("weather-info"); 
    const cityName = document.getElementById("city-name"); 
    const temperatureDisplay = document.getElementById("temperature"); 
    const descriptionDisplay = document.getElementById("description"); 
    const errorMessage = document.getElementById("error-message");

    const API_KEY = "dbf3cb38dcd3c478fbcc42563675a03e"; // Replace with environment variable in production

    getWeatherBtn.addEventListener("click", async () => {
        const city = cityId.value.trim(); 
        if (!city) return;

        try {
            const weatherData = await fetchWeatherData(city);
            displayWeatherData(weatherData); 
        } catch (error) {
            showError(); 
        }
    });

    async function fetchWeatherData(cityName) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${API_KEY}`; 
        
        const response = await fetch(url); 
        if (!response.ok) {
            throw new Error("Failed to fetch weather data");
        }

        const data = await response.json(); 
        return data;
    }

    function displayWeatherData(data) {
        const { name, main, weather } = data;

        cityName.textContent = name;
        temperatureDisplay.textContent = `${main.temp}°C`;
        descriptionDisplay.textContent = weather[0].description;

        errorMessage.classList.add('hidden'); 
        weatherInfo.classList.remove('hidden'); 
    }

    function showError() {
        weatherInfo.classList.add('hidden'); 
        errorMessage.classList.remove('hidden'); 
    }
});
