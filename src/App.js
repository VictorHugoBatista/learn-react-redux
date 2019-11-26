import React from 'react';
import './App.css';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initialState = {
  pageTitle: 'Título da página',
  pageContent: 'Lorem ipsum dolor sit amet, consecteur',
};
function reducer(state = initialState, action) {
  return state;
}
const store = createStore(reducer);

const App = () => {
  return (
    <Provider store={store}>
      <Routes />
    </Provider>
  );
}

export default App;
