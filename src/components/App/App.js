import { Header } from '../Header/Header';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchTodaysNews } from '../../fetches';
import { Switch, Route } from 'react-router-dom';
import { HomeDisplay } from '../HomeDisplay/HomeDisplay';
import { apiResponse } from '../../mockData';

const App = () => {
  const [news, setNews] = useState(apiResponse)

  useEffect(() => {
    console.log(news)
  }, [])


  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' render={() => <HomeDisplay news={news}/>} />
      </Switch>
    </div>
  );
}

export default App;
