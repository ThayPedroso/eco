import React, { useState } from 'react';
import './App.css';

import Header from './Header'

function App() {

  const [counter, setCounter] = useState(0)  // [valor do estado, função para atualizar o valor do estado]

  function handleButtonClick() {
    setCounter(counter + 1)
  }

  return (
    <div>
      <Header title="Hello World"/>
      <Header title={`Contador: ${counter}`}/>

      <h1>{counter}</h1>
      <h1>{counter * 2}</h1>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>
    </div> 
  )
}

export default App;


