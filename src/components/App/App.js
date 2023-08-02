import { Header } from '../Header/Header';
import './App.css';
import { useEffect, useState } from 'react';
import { fetchTodaysNews } from '../../fetches';
import { Switch, Route } from 'react-router-dom';
import { HomeDisplay } from '../HomeDisplay/HomeDisplay';
import { apiResponse } from '../../mockData';

const App = () => {
  const [news, setNews] = useState(apiResponse),
        [singleStory, setSingle] = useState(null);

  useEffect(() => {
    console.log(news)
  }, [])


  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' render={() => <HomeDisplay news={news}/>} />
        <Route exact path='/singleView' render={() => <SinlgeDisplay story={singleStory} />}
      </Switch>
    </div>
  );
}

export default App;
