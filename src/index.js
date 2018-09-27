import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reducers from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import 'semantic-ui-css/semantic.min.css'

//import registerServiceWorker from './registerServiceWorker';

const store = createStore(reducers, middleware)

ReactDOM.render(<Provider store={store}>
  <App />
  </Provider>, document.getElementById('root'));
//registerServiceWorker();
