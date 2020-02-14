import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import config from './config';
import LandingPage from './routes/LandingPage'
import DIYPage from './routes/DIYPage'
import ClassicTeaPage from './routes/ClassicTeaPage'
import CreationTeaPage from './routes/CreationTeaPage'
import AddTeaForm from './routes/AddTeaForm'
import UpdateTeaForm from './routes/UpdateTeaForm'

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
            <Route
              path={'/DIY'}
              component={DIYPage}
            />
            <Route
              path={'/classic/:classicID'}
              component={ClassicTeaPage}
            />
            <Route
              path={'/creation/:creationID'}
              component={CreationTeaPage}
            />
            <Route
              path={'/AddTeaForm'}
              component={AddTeaForm}
            />
            <Route
              path={'/UpdateTeaForm'}
              component={UpdateTeaForm}
            />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;