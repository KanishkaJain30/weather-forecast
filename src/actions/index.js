import axios from 'axios';
const API_KEY ='6338728faf0fac5bfbc6d982107ee1c8';

const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`;
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast/hourly?appid=${API_KEY}`;
//const ROOT_URL = `http://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}`;

export const FETCH_DATA = 'FETCH_DATA';
export function fetchWeather(city){
     //const url =`${ROOT_URL}&q=${city},us`;
     const url =`${ROOT_URL}&q=${city}`;
     //const url = 'http://api.openweathermap.org/data/2.5/weather?q={city}&appid={API key}';
    //const url= `http://api.openweathermap.org/data/2.5/weather?q=`+ {city}+ `appid=`+ {API_KEY};
    const request =axios.get(url);
    console.log(request);
    return{
        type:FETCH_DATA,
        payload:request
    };


}
