import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { manageTodos } from './reducers';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, manageTodos);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <React.StrictMode>
        <App/>
      </React.StrictMode>
    </PersistGate>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
