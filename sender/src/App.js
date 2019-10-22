import React, { useState } from 'react';
import './App.css';

import { 
  sendCommunication,
  instance,
  socket
}  from './services/api'

const logoAura = 'https://aura.services/images/logo-white.svg';

function App() {
  const [response, setResponse] = useState(''); 
  const [loading, setLoading] = useState(false)

  socket.on('response', (e) => {
    console.log(e)
    setResponse(e)
  });

  const handleClick = (e) => {
    e.preventDefault();

    setResponse('')

    const message = {
      first_name: 'Sender',
      last_name: 'Aura',
      email: 'shelton@help.com',
      message: 'Please send help.',
      location: '35.123456, 28.654321'
    }

    setLoading(true)
    sendCommunication(message)
    instance.post('/message', message)
    .then(res => {
      setLoading(false)
      if (!response) {
        setResponse(res.data.message)
      }
    })
    .catch(err =>  {
      setLoading(false)
      return err
    })
  }

  return (
    <div className="App">
      {loading? <h1>loading</h1>:
      <header className="App-header">
        <img className="logo" src={logoAura} alt="logo" />
        <p style={{'width': '70%'}}>
          {response? response:'Tap below to send an SOS alert'}
        </p>
        <button className="button" type="button" onClick={handleClick}>GET HELP</button>
      </header>}
    </div>
  );
}

export default App;
