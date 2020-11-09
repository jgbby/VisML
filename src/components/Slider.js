import React from 'react';
import CircularSlider from '@fseehawer/react-circular-slider';
import { GridContext } from './GridContext';
import './css/Slider.css';

class Slider extends React.Component {


  /**
   * @param {*} n 
   */
  initValues = (n) => {
    let arr = [];
    for (let i=0; i < n; i++){
      arr.push(i);
    }
    return arr;
  }

  render() {
    return (

      <div className="slider">
        <CircularSlider
            width="200"
            height="200"
            label="Points Trained"
            labelColor="#FFFFFF"
            knobColor="#590D59"
            progressColorFrom="#3075FF"
            progressColorTo="#3B337A"
            progressSize={24}
            trackColor="#eeeeee"
            trackSize={24}
            data={this.initValues(100)}
            dataIndex={0}
            onChange={ value => { this.context.setSlider(value); } }
        />
      </div>
    );
  };
}

Slider.contextType = GridContext;
export default Slider;

