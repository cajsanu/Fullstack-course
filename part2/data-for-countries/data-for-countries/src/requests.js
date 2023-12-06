import axios from "axios"
const URL = "https://studies.cs.helsinki.fi/restcountries/api/"
const api_key = import.meta.env.VITE_SOME_KEY


const getAll = () => {
    const request = axios.get("https://studies.cs.helsinki.fi/restcountries/api/all")
    return request.then(response => response.data)
}


const getWeather = ({ lat, lon }) => {
    const request = axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`)
    return request.then(response => response.data)
}


export { getAll, getWeather }

