import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import config from './config';
import LandingPage from './routes/LandingPage'

function checkConnection(){
  fetch(config.API_ENDPOINT)
  .then(response => response.json())
  .then(responseJson => {
    console.log(responseJson.message)
  })
  .catch(error => console.log(error))
}

class App extends Component {

  render() {
    return (
      <div className='App'>
        <header className='App__header'>
          <h1>BOBAPEDIA</h1>
        </header>
        <main className='App__main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;