import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css'; // to use the bootstrap css abilities
import App from './Components/App';
import { store } from './RTK/store'
import { Provider } from 'react-redux'
import { HashRouter  } from "react-router-dom";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <HashRouter>
    <Provider store={store}>

    <App />
    </Provider>
  </HashRouter>
);

 
