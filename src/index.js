import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import { ActionCableProvider } from 'react-actioncable-provider'
import { Provider } from 'react-redux'
import { BrowserRouter as Router } from 'react-router-dom'

import configureStore from './store'

const store = configureStore()

const WS = process.env.NODE_ENV === 'production' ? `${process.env.REACT_APP_API_BASE_URL}/cable` : 'ws://localhost:4000/cable'

ReactDOM.render(
  <ActionCableProvider url={WS}>
    <Provider store={store} >
      <Router>
        <App />
      </Router>
    </Provider>
  </ActionCableProvider>,
  document.getElementById('root')
);
