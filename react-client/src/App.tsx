import React from 'react';
import logo from './logo.svg';
import './App.css';
import wasm from "../../wasm-build/wasm"

function App() {
  import('wasm').then(module => {
    console.log(module)
  })
  return (
    <div className="App" />
  );
}

export default App;
