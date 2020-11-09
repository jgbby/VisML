import React from 'react';
import { GridContext } from './GridContext';
import Sidebar from './Sidebar'
import Slider from './Slider';
import Grid from './Grid'
import Nav from './Nav'




class Body extends React.Component {

  render() {

    return (
      <div className="Body">

        <Nav />
        <Sidebar width={300} height={100}/>
        <Grid />
        <Slider />


      </div>
    );
  };
}

Body.contextType = GridContext;
export default Body;