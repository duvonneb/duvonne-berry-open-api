fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=28.5383&longitude=-81.3792&current=temperature_2m&daily=weather_code&temperature_unit=fahrenheit&wind_speed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&models=best_match"
)
  .then((response) => response.json())
  .then((data) => {
    // Log the weather and weather code to the console
    // Get the current temperature and weather code
    const currentTemperature = data.current.temperature_2m;
    const weatherCode = data.daily.weather_code[0];

    // Convert weather code to description
    const weatherDescription = weatherCodes[weatherCode];

    //create tempature paragraph element
    const tempSection = document.querySelector("#Tempature");
    const tempParagraph = document.createElement("p");
    tempParagraph.innerHTML = `Current Temperature in Orlando: ${currentTemperature}°F <br> <button type="submit" onClick="refreshPage()">Refresh</button>`;
    tempSection.appendChild(tempParagraph);

    //create condition paragraph element
    const conditionSection = document.querySelector("#Condition");
    const conditionParagraph = document.createElement("p");
    conditionParagraph.innerHTML = `Weather Conditions: ${weatherDescription} <br> <button type="submit" onClick="refreshPage()">Refresh</button>`;
    conditionSection.appendChild(conditionParagraph);

    // Log the information to the console
    console.log(`Current Temperature in Orlando: ${currentTemperature}°F`);
    console.log(`Weather: ${weatherDescription}`);
  })
  .catch((error) => {
    console.error("Error fetching weather data:", error);
  });

//Weather codes descriptions
const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  53: "Moderate drizzle",
  55: "Heavy drizzle",
  56: "Light freezing drizzle",
  57: "Heavy freezing drizzle",
  61: "Light rain",
  63: "Moderate rain",
  65: "Heavy rain",
  66: "Light freezing rain",
  67: "Heavy freezing rain",
  71: "Light snow",
  73: "Moderate snow",
  75: "Heavy snow",
  77: "Snow grains",
  80: "Light rain showers",
  81: "Moderate rain showers",
  82: "Heavy rain showers",
  85: "Light snow showers",
  86: "Heavy snow showers",
  95: "Thunderstorm",
  96: "Thunderstorm with light hail",
  99: "Thunderstorm with heavy hail",
};

function refreshPage() {
  window.location.reload();
}
