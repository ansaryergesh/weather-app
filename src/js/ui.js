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
    weatherContainer.style.background = "url('../images/01n.jpg')";
    search.addEventListener('keydown', (e) => {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code === 13) {
        e.preventDefault();
        weatherData.weather(search.value);
        message.innerText = '';
        search.value = null;
      }
    });
    app.userLocation();
    app.setPosition();
  }

  const setBackground = (data) => {
      weatherContainer.style.background = `url("../images/${data}.jpg")`;
  }
  return {dom,setBackground};
})();

export { ui };