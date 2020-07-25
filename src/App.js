import React, { Component } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import { Route, withRouter } from 'react-router-dom'
import Musice from './components/Musice/Musice'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'
import LoginPage from './components/Login/Login'
import { connect } from 'react-redux'
import { initializeApp } from './Redux/app-reducer'
import { compose } from 'redux'
import Preloader from './components/common/Preloader/Preloader'

class App extends Component {
  componentDidMount() {
    this.props.initializeApp()
  }
  render() {
if(!this.props.initialized) {
    return <Preloader />
}
    return (
      <div className='app-wrapper' >
        <HeaderContainer />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/profile/:userId?' render={() =>
            <ProfileContainer />} />
          <Route path='/Dialogs' render={() =>
            <DialogsContainer />} />
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

const mapStateToProps = (state) =>({
  initialized: state.app.initialized
})

export default compose(
  withRouter,
  connect(mapStateToProps, { initializeApp }))(App)