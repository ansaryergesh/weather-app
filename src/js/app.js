import {weatherData} from './weather'
const app = (() => {
  let location;
  const message = document.querySelector('.message');
  const setPosition = (position) => {
      let latitude = position.coords.latitude;
      let logntitude = position.coords.longitude;
      checkCity(latitude,logntitude);
    }
  

  const getError = (err) => {
    message.innerText = `${error.message}`
  }

  const userLocation = () => {
    if('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(setPosition, getError);
    }else {
      message.innerText = 'Geolocation not supported for that browser';
    }
  }


  const checkCity = (latitude,longitude) => {
    const apiKey = '607cb0d14a7ab93d6a5e4b35ab83ee70';
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(api)
        .then((response) => {
            let data = response.json();
            return data
        })
        .then((data) => {
            weatherData.weather(data.name);
        })
        .catch((error) => {
            document.querySelector('.message').innerText = 'Something went wrong'
        });
  }
  return{userLocation,checkCity,setPosition}
})();



export { app} ;