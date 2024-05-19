import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./SearchBox.css";
import { useState } from "react";

export default function SearchBox({updateInfo}) {
    let API_URL = "https://api.openweathermap.org/data/2.5/weather";
    let API_KEY = "891cf1206eeacddfdbeebbf6ae513f78";
    let [city, setCity] = useState("");

    let getWeatherInfo = async () => {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let JsonResponse = await response.json();
        let result = {
            city: city,
            temp: JsonResponse.main.temp,
            tempMin: JsonResponse.main.temp_min,
            tempMax: JsonResponse.main.temp_max,
            humidity: JsonResponse.main.humidity,
            feelsLike: JsonResponse.main.feels_like,
            weather: JsonResponse.weather[0].description,
        }
        return result;
    };
    let handleChange = (evt) => {
        evt.preventDefault();
        setCity(evt.target.value);
    }
    let handleSubmit = async (evt) => {
        evt.preventDefault();
        console.log(city);
        setCity("");
        let info = await getWeatherInfo(city);
        updateInfo(info);
    }
    return (
        <div className="SearchBox">
        <h3>Search for the weather</h3>
        <form onSubmit={handleSubmit}>
            <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>

            <Button variant="contained" type="submit">
                Search
            </Button>
        </form>
        </div>
    );
}