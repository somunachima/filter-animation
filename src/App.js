import './App.css';
import { useEffect, useState } from "react";

function App() {

  const [popular, setPopular] = useState([]);

  useEffect(() => {
    fetchPopular();
  }, []);

  const fetchPopular = async () => {
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=6596dbb524789ffb0a06163d4918689d&language=en-US&page=1");
    const movies = await data.json();
    // console.log(movies);
    setPopular(movies.results);
  }

  return (
    <div className="App">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
