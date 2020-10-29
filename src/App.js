import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PhotoCard from './components/PhotoCard';
import FluidJumborton from './components/FluidJumbotron';
import './App.css';

import Example from './components/example';

function App() {
  const [image, setImage] = useState({});
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=3buXqNEKJPxjD7bq3nPUGg6ZAJnaeqBtXtdlW4ne').then(response => {
      setImage(response.data);
      console.log(response);
    });
  }, []);

  return (
    <div className="App">
      <Example />
      <FluidJumborton />
      <PhotoCard title={image.title} imageurl={image.url} explanation={image.explanation} date={image.date} />
    </div>
  );
}

export default App;
