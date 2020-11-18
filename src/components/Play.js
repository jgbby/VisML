import React from 'react';

import { GridContext } from './GridContext';
import Sidebar from './Sidebar'
import Slider from './Slider';
import Grid from './Grid'
import Nav from './Nav'




class Play extends React.Component {

  render() {

    return (
      <div className="Play">
          <Sidebar width={300} height={100}/>
          <Grid />
          <Slider />
      </div>
    );
  };
}

Play.contextType = GridContext;
export default Play;