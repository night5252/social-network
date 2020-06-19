import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import News from './components/News/News'
import { Route } from 'react-router-dom'
import Musice from './components/Musice/Musice'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'
import ProfileContainer from './components/Profile/ProfileContainer'
import HeaderContainer from './components/Header/HeaderContainer'

const App = (props) => {
  return (
    <div className='app-wrapper'>
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
      </div>
    </div>
  )
}

export default App