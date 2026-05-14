// module for creating the weather card dynamically
export default function renderCard(weatherData){
    //pass in weatherData object containing all relevant weather info you need.

    const weatherCard = document.getElementById("weatherCard");

    const currentTime = document.createElement("h1");
    // <!-- Check if the API actually returns a time property -->
    // <!-- IF time works, we can update on a frequent basis maybe with a setInterval, but this may cause too many API calls if we fetch it every single time. -->
    const cityName = document.createElement("h1");
    const humidity = document.createElement("h3");
    const skyCondition = document.createElement("h3");
    const weatherIcon = document.createElement("p");
    const temperature = document.createElement("h1");

    currentTime.id = "currentTime";
    cityName.id = "cityName";
    humidity.id = "humidity";
    skyCondition.id = "skyCondition";
    weatherIcon.id = "weatherIcon";
    temperature.id = "temperature";

    //change these textContent's to the values of the weatherData object being passed in
    currentTime.textContent = "4:20";
    cityName.textContent = "Toronto";
    humidity.textContent = "200";
    skyCondition.textContent = "Cloudy";
    weatherIcon.textContent = "☁️";
    temperature.textContent = "99";

    weatherCard.append(currentTime, cityName, humidity, skyCondition, weatherIcon, temperature);
}