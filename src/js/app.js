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
    const apiKey = '563a4032259d2eff8e4ec08a146fa0a4';
    let api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(api)
        .then((response) => {
            let data = response.json();
            return data
        })
        .then((data) => {
            document.querySelector('.search').value = data.name;
        })
  }
  return{userLocation,checkCity,setPosition}
})();



export { app} ;