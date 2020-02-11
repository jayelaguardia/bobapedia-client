import React from 'react';
import config from './config';

function checkConnection(){
  fetch(config.API_ENDPOINT)
  .then(response => response.json())
  .then(responseJson => {
    console.log(responseJson.message)
  })
  .catch(error => console.log(error))
}

function App() {

  return (
    <main className='App'>
      <h1>Bobapedia</h1>
      {checkConnection()}
    </main>
  );
}

export default App;