const app = (() => {
  const message = document.querySelector('.message');
  const setPosition = (position) => {
      let latitude = position.coords.latitude;
      let logntitude = position.coords.longtitude;
  }

  const getError = (err) => {
    message.innerText = `${error.message}`
  }

  return{setPosition, getError}
})();

export { app} ;