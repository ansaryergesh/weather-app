const ui = (() => {
  const location = document.querySelector('.city');
  const tempature = document.querySelector('.tempature');
  const name = document.querySelector('.name');
  const search = document.querySelector('.search');
  
  const dom = () => {
    search.addEventListener('keydown', (e) => {
      var code = (e.keyCode ? e.keyCode : e.which);
      if (code === 13) {
        e.preventDefault();
        search.value = null;
        console.log(search.value);
      }
    });
  }

  const render = () => {
    dom();
  }

  return {dom,render};
})();

export { ui };