import {ui} from './ui';
const weatherData = (() => {
  const weather = async (city) => {
    const location = document.querySelector('.city');
    const tempature = document.querySelector('.value');
    const name = document.querySelector('.name');
    const country = document.querySelector('.country');
    const search = document.querySelector('.search');
    const humadity = document.querySelector('.humadity');
    const cloud = document.querySelector('.cloud');
    const wind = document.querySelector('.wind');
    const message = document.querySelector('.message');
    const body = document.querySelector('body');
    const type = document.querySelector('.type');
    const apiKey = '607cb0d14a7ab93d6a5e4b35ab83ee70';
    const api =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
    let temp = {};

    await fetch(api)
      .then((response) => {
        let data = response.json();
        return data
      })
      .then((data) => {
        location.innerText = data.name;
        country.innerText = data.sys.country;
        name.innerText= data.weather[0].description;
        tempature.innerText = `${Math.floor(data.main.temp - 273)} °C`
        temp.value = Math.floor(data.main.temp - 273);
        temp.type = 'celciues';
        wind.innerText = Math.floor(data.wind.speed);
        cloud.innerText = data.clouds.all;
        humadity.innerText = data.main.humidity;
        ui.setBackground(data.weather[0].icon);
       
      })
      
      .catch((error) => {
        message.innerText = 'Wrong city'
      })

      const changeTemp = (temp) => {
          return (temp * 1.8) + 32;
      }

      tempature.addEventListener('click', () => {
        if (temp.value === undefined) return;

        if (temp.type === 'celciues') {
          let fah = Math.floor(changeTemp(temp.value));
          tempature.innerText = `${fah} °F`;
          temp.type = 'fah';
        }else{
          tempature.innerText = `${temp.value} °C`;
          temp.type = 'celciues'
        }
        
      })
  }

  return { weather }

})();

export { weatherData };