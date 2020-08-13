import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import { Route, withRouter } from 'react-router-dom'
import Musice from './components/Musice/Musice'
import Settings from './components/Settings/Settings'
import UsersContainer from './components/Users/UsersContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './Redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'
import { HashRouter } from 'react-router-dom'
import store from './Redux/StoreRedux'
import { Provider } from 'react-redux'
import { withSuspense } from './hoc/withSuspense'

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer'))
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer'))

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }
    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?'
            render={withSuspense(ProfileContainer)} />
          <Route path='/Dialogs'
            render={withSuspense(DialogsContainer)} />
          <Route path='/Users' render={() =>
            <UsersContainer />} />
          <Route path='/News' render={() => <News />} />
          <Route path='/Musice' render={() => <Musice />} />
          <Route path='/Settings' render={() => <Settings />} />
          <Route path='/Login' render={() => <LoginPage />} />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)

const MainJsApp = (props) => {
  return <HashRouter>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </HashRouter>
}

export default MainJsApp