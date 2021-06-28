import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './App.css';
import Character from './components/Character';
import Navigation from './components/Navigation'
import styled from 'styled-components'


const wrapperHeader = styled.h1`
  font-family: 'Times New Roman', Times, serif;
  color: yellow;
`


const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [baseURL] = useState("https://swapi.dev/api/people/?name=")
  const [character, setCharacter] = useState([])
  const [search, setSearch] = useState("")


  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(baseURL + search)
      // axios.get(`https://swapi.dev/api/people/?name=${search}`)
      .then((res) => {
        console.log(res.data)
        setCharacter(res.data)
      })
      .catch(error => { return error })
  }, [search])

  const searchHandler = (event) => {
    setSearch(event.target.value)

  }



  return (
    <div className="App">
      <header>
        <Navigation search={search} searchHandler={searchHandler} />
      </header>

      <h1 className="Header">Star Wars Major Characters List</h1>

      <main>
        <Character myName="Chris" myAge="27" character={character} />

      </main>
    </div>
  );
}

export default App;
