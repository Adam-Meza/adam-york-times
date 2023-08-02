
var url = 'https://newsapi.org/v2/everything?' +
          'q=Apple&' +
          'from=2023-08-01&' +
          'sortBy=popularity&' +
          'apiKey=f0752976babd488a867bd6c621255ab1';


export const fetchTodaysNews = () => {
  fetch(url)
    .then(data=> data.json())
    .then(json => console.log(json))
}

