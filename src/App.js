import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import { Route, BrowserRouter } from 'react-router-dom';
import Musice from './components/Musice/Musice';
import Settings from './components/Settings/Settings';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Route path='/Profile' component={Profile} />
          <Route path='/Dialogs' component={Dialogs} />
          <Route path='/News' component={News} />
          <Route path='/Musice' component={Musice} />
          <Route path='/Settings' component={Settings} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;