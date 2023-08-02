export const fetchTodaysNews = () => {
  fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f0752976babd488a867bd6c621255ab1')
    .then(data=> data.json())
    .then(json => console.log(json))
}

