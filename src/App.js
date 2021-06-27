import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [baseURL] = useState("https://swapi.dev/api/people");
  const [characters, setCharacters] = useState([])


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(baseURL)
      .then((res) => {
        // to see object in console - can delete later
        console.log(res.data.results)
        setCharacters(res.data.results)
      })
  }, [])

  return (
    <div className="App">
      <h1 className="Header">Characters</h1>
    </div>
  );
}

export default App;
