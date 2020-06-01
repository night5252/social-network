import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import Profile from './components/Profile/Profile'
import News from './components/News/News'
import { Route } from 'react-router-dom'
import Musice from './components/Musice/Musice'
import Settings from './components/Settings/Settings'
import DialogsContainer from './components/Dialogs/DialogsContainer'
import UsersContainer from './components/Users/UsersContainer'

const App = (props) => {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navbar />
      <div className='app-wrapper-content'>
        <Route path='/Profile' render={() =>
          <Profile />} />
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