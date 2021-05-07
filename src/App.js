import React from 'react';
import './App.css';
import Content from './Content';
import products from './products';


function App() {
  return (
    <Content products={products}/>
  );
}

export default App;
