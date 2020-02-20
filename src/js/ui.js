import {app} from './app';
import {weatherData} from './weather';
const ui = (() => {
  const location = document.querySelector('.city');
  const tempature = document.querySelector('.tempature');
  const name = document.querySelector('.name');
  const search = document.querySelector('.search');
  const message = document.querySelector('.message');
  const body = document.querySelector('body');
  const weatherContainer = document.querySelector('.weatherContainer');
  const dom = () => {
    search.addEventListener('keydown', (e) => {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code === 13) {
        e.preventDefault();
        weatherData.weather(search.value);
        message.innerText = '';
        search.value = null;
      }
    });
  }

  

  const setBackground = (data) => {
    weatherContainer.style.backgroundImage = `url("https://raw.githubusercontent.com/ansaryergesh/weather-app/master/src/images/${data}.jpg")`;
  }


  const render = () => {
    dom();
    app.userLocation();
    app.setPosition();
  }
  return {dom,setBackground,render,};
})();

export { ui };