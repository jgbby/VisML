import React from 'react';
import {Button} from 'reactstrap';
import { GridContext } from '../GridContext';


class EditButtons extends React.Component {

    incrementColor = () => {
        /**
         * Increments the given color
         */
        let colors = this.context.state.Colors;
        let colorIndex = this.context.state.ColorIndex;
        if (colorIndex === colors.length - 1){
            this.context.setColorIndex(1, () => console.log("Set color to " + colors[colorIndex]))
          }
          else {
            this.context.setColorIndex(colorIndex + 1, () => console.log("Set color to " + colors[colorIndex]))
        }
    } 


    render(){
        return (
            <div className="edit">
                <Button className="button" id="colorButton" onClick={this.incrementColor}>
                    <img id="colorImage" src="https://img.icons8.com/office/50/000000/rgb-circle-1.png"/>
                </Button>
                <Button className="button" id="eraseButton" onClick={() => this.context.setColorIndex(0)}>
                    <img id="eraseImage" src="https://img.icons8.com/cotton/50/000000/erase.png"/>
                </Button>
                <Button className="button" id="clearButton" onClick={() => this.context.setClear(true)}>
                    <img id="clearImage" src="https://img.icons8.com/plasticine/50/000000/keep-clean.png"/>
                </Button>
            </div>
        )
    }
}

EditButtons.contextType = GridContext;
export default EditButtons;