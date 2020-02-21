import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import ClassicPage from './routes_components/ClassicPage'
import CreationPage from './routes_components/CreationPage'
import ClassicTeaPage from './routes_components/ClassicTeaPage'
import CreationTeaPage from './routes_components/CreationTeaPage'
import AddTeaForm from './routes_components/AddTeaForm'
import UpdateTeaForm from './routes_components/UpdateTeaForm'
import LoginPage from './routes_components/LoginPageRoute'
import RegistrationPage from './routes_components/RegistrationPageRoute'
import LandingPage from './routes_components/LandingPage'
import PrivateRoute from './routes_components/PrivateRoute'
import PublicOnlyRoute from './routes_components/PublicOnlyRoute'
import TokenService from './services/token-service'

class App extends Component {
  handleLogoutClick = () => {
    TokenService.clearAuthToken()
  }

  renderLogoutLink() {
    return (
      <div className='Header__logged-in'>
        <Link onClick={this.handleLogoutClick} to='/'> <button>Log out</button> </Link>
      </div>
    )
  }

  renderLoginLink() {
    return (
      <>
        <Link to='/login'><button>Log in</button></Link>
        <Link to='/register'><button>Register</button></Link>
      </>
    )
  }

  render() {
    return (
      <div className='App'>

        <header className='App__header'>
          <h1>BOBAPEDIA</h1>
          <nav>
            <Link to={`/classic`}><button>Classic</button></Link>
            <Link to={`/creation`}><button>Creation</button></Link>
            {TokenService.hasAuthToken()
            ? this.renderLogoutLink()
            : this.renderLoginLink()}

          </nav>
        </header>

        <main className='App__main'>
          <Switch>
            <Route
              exact
              path={'/'}
              component={LandingPage}
            />
            <Route
              exact
              path={'/classic'}
              component={ClassicPage}
            />
            <PrivateRoute
              path={'/creation'}
              component={CreationPage}
            />
            <Route
              path={'/classic/:classicID'}
              component={ClassicTeaPage}
            />
            <PrivateRoute
              path={'/creation/:creationID'}
              component={CreationTeaPage}
            />
            <PrivateRoute
              path={'/AddTeaForm'}
              component={AddTeaForm}
            />
            <PrivateRoute
              path={'/UpdateTeaForm'}
              component={UpdateTeaForm}
            />
            <PublicOnlyRoute
              path={'/login'}
              component={LoginPage}
            />
            <PublicOnlyRoute
              path={'/register'}
              component={RegistrationPage}
            />
          </Switch>
        </main>
      </div>
    )
  }
}


export default App;