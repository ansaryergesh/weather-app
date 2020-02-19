import {ui} from './ui';
const weatherData = (() => {
  const weather = async (city) => {
    const location = document.querySelector('.city');
    const tempature = document.querySelector('.tempature');
    const name = document.querySelector('.name');
    const country = document.querySelector('.country');
    const search = document.querySelector('.search');

    const message = document.querySelector('.message');
    const body = document.querySelector('body');
    const apiKey = '607cb0d14a7ab93d6a5e4b35ab83ee70';
    const api =`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`

    await fetch(api)
      .then((response) => {
        let data = response.json();
        return data
      })
      .then((data) => {
        location.innerText = data.name;
        country.innerText = data.sys.country;
        name.innerText= data.weather[0].description;
        tempature.innerText = Math.floor(data.main.temp - 273);
        // ui.setBackground(data.weather[0].icon);
      })
      .catch((error) => {
        message.innerText = 'Wrong city'
      })
  }
  return { weather }

})();

export { weatherData };