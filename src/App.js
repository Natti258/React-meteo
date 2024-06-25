import React from 'react';
import './App.css';
import WeatherSearch from './components/WeatherSearch';

function App() {
  return (
    <div className="content">
      <header className="mein">
        <WeatherSearch />
      </header>
      <footer>
        <p>
          This project was coded by
          <a
            href="https://www.behance.net/Natali_Skirdova?log_shim_removal=1"
            target="_blank"
            rel="noopener noreferrer"
          >
            Natali Skirdova
          </a>
          and is
          <a href="https://github.com/Natti258/meteo" target="_blank" rel="noopener noreferrer">
            on GitHub
          </a>
          and
          <a href="https://meteo-nat.netlify.app/" target="_blank" rel="noopener noreferrer">
            hosted on Netlify
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;