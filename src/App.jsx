import SearchBox from "./SearchBox";
import InfoBox from "./Infobox";
import "./App.css";
import { useState } from "react";

function App() {
  const[weatherInfo, setWeatherInfo] = useState({
    city: "wonderland",
    feelslike: 25.05,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    feelsLike: "humid",
    weather: "haze",
});
let updateInfo = (result) => {
  setWeatherInfo(result);
}
  return (
    <>
      <SearchBox updateInfo={updateInfo}/>
      <InfoBox info={weatherInfo}/>
    </>
  );
}

export default App
