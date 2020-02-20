import React, { Component } from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import LandingPage from './routes&components/LandingPage'
import DIYPage from './routes&components/DIYPage'
import ClassicTeaPage from './routes&components/ClassicTeaPage'
import CreationTeaPage from './routes&components/CreationTeaPage'
import AddTeaForm from './routes&components/AddTeaForm'
import UpdateTeaForm from './routes&components/UpdateTeaForm'
import LoginPage from './routes&components/LoginPageRoute'
import RegistrationPage from './routes&components/RegistrationPageRoute'
import PrivateRoute from './routes&components/PrivateRoute'
import PublicOnlyRoute from './routes&components/PublicOnlyRoute'
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
            <Link to={`/`}><button>Classic</button></Link>
            <Link to={`/DIY`}><button>Creation</button></Link>
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
            <PrivateRoute
              path={'/DIY'}
              component={DIYPage}
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