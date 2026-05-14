import getWeatherData from "./fetch-data.js";
import renderCard from "./display-card.js";

export default function initApp(){

    const weatherInput = document.getElementById("weatherInput");

    //form event listener for submission
    const weatherForm = document.getElementById("weatherForm");
    weatherForm.addEventListener("submit", (event)=>{
        event.preventDefault();

        // retrieve input value, 
        const cityName = weatherInput.value;

        // call our getWeatherData() function, passing in the input value
        const weatherData = getWeatherData(cityName);

        // Call renderCard() here
        renderCard(weatherData);
    });


    //event listener for temperature conversion button click
    //use event delegation?



}