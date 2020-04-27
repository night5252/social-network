import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let posts = [
  { id: 0, post: 'Hi, how are you?', LikesCount: '12', DislikesCount: '0' },
  { id: 1, post: 'I`ts my first post', LikesCount: '42', DislikesCount: '7' },
]

let dialogsData = [
  { id: 0, name: 'Boris' },
  { id: 1, name: 'Igor' },
  { id: 2, name: 'Sergey' },
  { id: 3, name: 'Dmitrey' },
  { id: 4, name: 'Oleg' }
]

let messagesData = [
  { id: 0, message: 'Hey' },
  { id: 1, message: 'How are you?' },
  { id: 2, message: 'I`m find' },
  { id: 3, message: 'Yo' },
  { id: 4, message: 'yo' }
]

ReactDOM.render(
  <React.StrictMode>
    <App posts={posts} dialogsData={dialogsData} messagesData={messagesData}/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();