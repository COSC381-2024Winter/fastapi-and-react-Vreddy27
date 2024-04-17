import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { TextField, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';

function App() {
  const [movieId, setMovieId] = useState("1");
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    if (movieId === "") {
      setMovie(null);
    } else {
      console.log(movieId);
    }
  }, [movieId]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <TextField
          id="outlined-basic"
          label="MovieId"
          variant="outlined"
          color="secondary"
          value={movieId}
          onChange={e => setMovieId(e.target.value)}
        />
        <List>
          {movie && (
            <ListItem>
              <ListItemIcon>
                <LocalMoviesIcon />
              </ListItemIcon>
              <ListItemText primary={movie.name} />
            </ListItem>
          )}
        </List>
      </header>
    </div>
  );
}

export default App;
