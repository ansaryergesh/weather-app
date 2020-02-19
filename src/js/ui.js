import {app} from './app'
const ui = (() => {
  const location = document.querySelector('.city');
  const tempature = document.querySelector('.tempature');
  const name = document.querySelector('.name');
  const search = document.querySelector('.search');
  const message = document.querySelector('.message');
  

  const userLocation = () => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(app.setPosition, app.getError);
    }else {
      message.innerText = 'Geolocation not supported for that browser';
    }
  }
  const dom = () => {
    search.addEventListener('keydown', (e) => {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code === 13) {
        e.preventDefault();
        console.log(search.value);
        search.value = null;
      }
    });

  }
  return {dom, userLocation,};
})();

export { ui };