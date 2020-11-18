import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Home from './components/Home';
import Play from './components/Play'
import AlgoInfo from './components/AlgoInfo';
import Error from './components/Error';
import Nav from './components/Nav';


import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


import { GridProvider } from './components/GridContext';



function App() {

  return (

    <div className="App">
      <div id="loaderDiv">
        <title>VisML</title>
        <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;900&display=swap" rel="stylesheet"></link>
        <GridProvider>
          <BrowserRouter>
          <div>
            <Nav/>
              <Switch>
                <Route path="/" component={Home} exact/>
                <Route path="/play" component={Play}/>
                <Route path="/algoinfo" component={AlgoInfo}/>
                <Route component={Error}/>
              </Switch>
          </div>
         </BrowserRouter>
        </GridProvider>
      </div>
    </div>
  );
}

export default App;
