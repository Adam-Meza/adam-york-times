import { Header } from '../Header/Header';
import './App.css';
import { useEffect, useState } from 'react';
import { Switch, Route, useHistory } from 'react-router-dom';
import { HomeDisplay } from '../HomeDisplay/HomeDisplay';
import { apiResponse } from '../../mockData';
import { SingleView } from '../SingleView/SingleView';
import { cleanData } from '../../utilities';

const App = () => {
  const history = useHistory();
  const [news, setNews] = useState(cleanData([])),
        [singleStory, setSingle] = useState(''),
        [loading, setLoading] = useState(true);

  const fetchTodaysNews = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&apiKey=f0752976babd488a867bd6c621255ab1');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const json = await response.json();
      console.log((json.articles))
      setNews(cleanData(json.articles));
      setLoading(false)
    } catch (error) {
      console.error('Error fetching news:', error);
    }
  };
  useEffect(() => {
    fetchTodaysNews();
  }, []);

  const displaySingleStory = (id) => {
    console.log(id)
    history.push(`/story/${id}`);
  }


  return (
    <div className="App">
      <Header />
      <Switch>
        <Route
          exact path="/" render={() => (
            <div className="main-wrapper">
              {loading && <h2>loading ... </h2>}
              {!loading && (
                <HomeDisplay
                  news={news}
                  displaySingleStory={displaySingleStory}
                />
              )}
            </div>
          )}
        />
        <Route exact path="/story/:id"
          render={(props) => <SingleView {...props} news={news} />}
        />
      </Switch>
    </div>
  );
  
}

export default App;
