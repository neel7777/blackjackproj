import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Cards from './Cards';
import './App.css';



function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <h1>PracJack</h1>
      <Cards/>
    
    </div>
    </Provider>
  );
}

export default App;
