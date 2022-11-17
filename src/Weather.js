import React from "react";
import axios from 'axios';

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather ${props.city} is ${response.data.main.temp}C`)
    }
    let apiKey = "50c2acd53349fabd54f52b93c8650d37";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse)
    return <h2>Weather App.com</h2>}