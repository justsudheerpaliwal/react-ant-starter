import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './App';
// create a redux store
const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

const RenderApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RenderApp />, document.getElementById('app'));
