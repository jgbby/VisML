import React from 'react';
import { Input } from 'reactstrap';
import { GridContext } from '../GridContext';
import '../add-ins/jscolor';


class InputOptions extends React.Component {
    render(){
        return (
            <div className="options">
            <div className="input-row">
              <div class="input-group mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="basic-addon1">
                    CELL SIZE
                  </span>
                </div>
                <Input id="cellsize" type="number" class="input form-control" placeholder="20" aria-label="cellSize" aria-describedby="basic-addon1"/>
              </div>
            </div>

            <div class="input-group mb-3">
              <Input /* disabled */ className="input" id="jscolor" data-jscolor=""/>
            </div>
          </div>
        )
    }
}


InputOptions.contextType = GridContext;
export default InputOptions;