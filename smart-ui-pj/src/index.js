import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './redux/rootReducer';
import createSagaMiddleware from 'redux-saga';
import { rootWatcher } from './redux/saga';
import logger from 'redux-logger';
import { allPostsWatcher } from './redux/saga/fetchSaga';

const  sagaMiddleware = createSagaMiddleware()
 const store = createStore(rootReducer , compose(
       applyMiddleware(logger,  sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
      )  
 )
 
 sagaMiddleware.run(allPostsWatcher)

ReactDOM.render(
 
  <React.StrictMode>
        <Provider store={store}>
            <App />
        </Provider> 
  </React.StrictMode>,
  document.getElementById('root')
);

