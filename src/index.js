import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App'
import BoroApp from './component/BoroApp'

ReactDOM.render(
  <React.StrictMode>
      <App name={"janina"}/>
      <BoroApp />
  </React.StrictMode>,
  document.getElementById('root')
);
