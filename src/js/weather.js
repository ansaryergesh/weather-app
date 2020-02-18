// const weather =(url, api_key, city) => {
//     // const url = 'api.openweathermap.org/data/2.5/weather?q=';
//     // const api_key = '563a4032259d2eff8e4ec08a146fa0a4';
//     const weatherData = {
//       url: 'api.openweathermap.org/data/2.5/weather?q=',
//       api_key: '563a4032259d2eff8e4ec08a146fa0a4',
//       city,
//     };

//     const getWeather = async() => {
//         const response = await fetch(${url}${city})
        
//     }
// }
export class Weather{
    constructor(city){
        this.apiKey = '563a4032259d2eff8e4ec08a146fa0a4';
        this.city = city;
        this.url = 'api.openweathermap.org/data/2.5/weather?q=';
    }

    async getData() {
      const response = await fetch(`${this.url}${this.city}uk&appid=${this.apiKey}`);
      const jsonData = await respone.json();   
    }

    changeCity(city) {
        this.city = city;
    }
}