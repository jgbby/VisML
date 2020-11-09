import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from './components/Nav';
import Body from './components/Body'

import { GridProvider } from './components/GridContext';



function App() {

  return (

    <div className="App">
      <div id="loaderDiv">
        <title>VisML</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap" rel="stylesheet"></link>
        <GridProvider>

          <Body />
        
        </GridProvider>
      </div>
    </div>
  );
}

export default App;
