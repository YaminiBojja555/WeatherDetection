async function getWeather() {
    const cityInput = document.getElementById("city-input").value;
    const apiKey = `a2d5327f24ea0c6273d2de7ad9a3c969`; 
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.cod === "404") {
            document.getElementById("weather-output").innerHTML = "<p>City not found</p>";
        } else {
            const weatherInfo = `
                <h2>${data.name}</h2>
                <p>Temperature: ${data.main.temp}°C</p>
                <p>Description: ${data.weather[0].description}</p>
            `;
            document.getElementById("weather-output").innerHTML = weatherInfo;
        }
    } catch (error) {
        console.error("Error fetching weather data:", error);
    }
}
