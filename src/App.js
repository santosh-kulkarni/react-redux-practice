import React from 'react';
import './App.css';
import Items from "./components/Items";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Items />
      </Provider>
    </div>
  );
}

export default App;
