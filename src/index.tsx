import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from 'reducer';
//style
import 'bootstrap/dist/css/bootstrap.min.css';
import { markInComplete } from 'action';


ReactDOM.render(
  <React.StrictMode>
    <Provider store={createStore(rootReducer)}>
      <App markIncomplete={markInComplete}/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

