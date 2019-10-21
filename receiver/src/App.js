import React, { useState, useEffect } from 'react';
import './App.css';

import {NotificationContainer, NotificationManager} from 'react-notifications';

// Components
import NavHeader from './components/navbar';
import RequestsTable from './components/table';

import {socket, instance} from './services/api';

const logoAura = 'https://aura.services/images/logo-white.svg';

function App() {
  socket.on('incommingMessage', (e) => {
    NotificationManager.warning('Please click refresh to see the details.', e.message, 6000)
    console.log('Works', e)
  })

  const [alertList, setAlertList] = useState(null)

  useEffect(() => {
    if (!alertList) {
      handleClick()
    }
  })

  const handleClick = () => {
    instance.get('get-alerts/')
      .then(res => {
        setAlertList(res.data)
      })
      .catch(err => {
        return err
      })
  }

  return (
    <div className="App">
      <NavHeader handleClick={handleClick} />
      <header className="App-header">
        <RequestsTable requests={alertList} />
      </header>
      <NotificationContainer/>
    </div>
  );
}

export default App;
