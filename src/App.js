
import './App.css';
import { useEffect } from 'react';
import { fetchTodaysNews } from './fetches';

function App() {

  useEffect(() => {
    fetchTodaysNews()
  }, [])
  return (
    <div className="App">

    </div>
  );
}

export default App;
