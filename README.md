# WeatherApp
This is a simple web application that provides current weather information and an extended 14-day weather forecast for a given city. The app utilizes the OpenWeatherMap API to fetch weather data.

# Installation and Setup
# Prerequisites
Make sure you have Node.js and npm (Node Package Manager) installed on your machine.

Clone the repository to your local machine:
- git clone https://github.com/your-username/weather-app.git

Navigate to the project directory:
# Install dependencies:
- npm install

# API Key Setup
To fetch weather data, you need to obtain an API key from OpenWeatherMap.
Visit OpenWeatherMap and sign up for a free account.
After signing in, go to the API Keys section to generate an API key.
Copy your API key and paste.
- apiKey = your_openweathermap_api_key

But for demonstration purposes, project will have a api key.

# Running the Application
Start the server:
- npm run dev

Open your web browser and go to http://localhost:3000.
Enter the city name in the input field and click "Get Weather" to view the current weather and extended forecast.
Also, enter the city and state preferebly(ex. KZ, US) and click "Get Map" to show accurate map.

# Built With
Node.js
Express.js
EJS (Embedded JavaScript)
Leaflet.js (for displaying maps)
OpenWeatherMap API
OpenStreetMap API
Nominatim API

# Dependencies
"axios": "^1.6.5",
"ejs": "^3.1.9",
"express": "^4.18.2",
"nodemon": "^3.0.3",
"querystring": "^0.2.1"
