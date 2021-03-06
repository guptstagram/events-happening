import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './store/reducers/rootReducer';
import {reactReduxFirebase,getFirebase} from "react-redux-firebase";
import {reduxFirestore,getFirestore} from "redux-firestore";
import firebaseConfig from "./config/firebaseConfig";

const store=createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument(getFirebase)),
    reactReduxFirebase(firebaseConfig),
    // reduxFirestore(firebaseConfig),
  )
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
