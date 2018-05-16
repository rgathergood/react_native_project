import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyApP0ctYKNWdn1nrk8RvYuKGJCq9sftcQw',
      authDomain: 'manager-25e9c.firebaseapp.com',
      databaseURL: 'https://manager-25e9c.firebaseio.com',
      projectId: 'manager-25e9c',
      storageBucket: 'manager-25e9c.appspot.com',
      messagingSenderId: '49353477795'
    };

    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
          <Router />
      </Provider>
    );
  }
}

export default App;
