import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [errorMessage, setErrorMessage] = useState("");
  const [roomId, setRoomId] = useState(0);
  const [gameState, setGameState] = useState();
  

const getState = () => {
  console.log(gameState.json)
}

const game = async () => {
  
    // GET request using fetch with async/await
    fetch('http://localhost:8080/game')
    .then(async response => {
        const data = await response.json();

        // check for error response
        if (!response.ok) {
            // get error message from body or default to response statusText
            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        console.log(data);

        setGameState(data);

        //this.setState({ totalReactPackages: data.total })
    })
    .catch(error => {
        this.setState({ errorMessage: error.toString() });
        //console.error('There was an error!', error);
    });

}

  return (
    <div className="App">
      <header className="App-header">

<p>Haut Standing Game</p>

<button onClick={game}>  Game  </button>
<button onClick={getState}>  Get State </button>
<p/>

      </header>
    </div>
  );
}

export default App;
