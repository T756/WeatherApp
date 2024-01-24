const express = require("express");
const axios = require("axios");
const app = express();
const port = 3000;

const apiKey = "49cc8c821cd2aff9af04c9f98c36eb74";

app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("index", { currentWeather: null, extendedForecast: null, error: null });
});


app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=Metric&appid=${apiKey}`;
    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=Metric&appid=${apiKey}`;

    let currentWeather;
    let extendedForecast;
    let error = null;

    try {
        const [weatherResponse, forecastResponse] = await Promise.all([
            axios.get(weatherUrl),
            axios.get(forecastUrl),
        ]);

        currentWeather = weatherResponse.data;
        extendedForecast = forecastResponse.data.list;
    } catch (err) {
        currentWeather = null;
        extendedForecast = null;
        error = "Error, Please try again";
    }

    res.render("index", { currentWeather, extendedForecast, error });
});


app.listen(port, function() {
    console.log(`Server is running on port: ${port}`);
});