import React from 'react';
import { GridContext } from '../GridContext';
import "../css/BoxButton.css"

class BoxButton extends React.Component {

    render() {
        return (
            <div id="boxButton">

                <div className="outer">
                    <p className="center label">
                        PLAYGROUND
                    </p>
                    <div className="center inner">

                    </div>
                </div>


            </div>
        )
    }
}
/*
                    <a class="white" href="#"><p><span class="bg"></span><span class="base"></span><span class="text">Playground</span></p></a>

                    <a class="transparent" href="#"><p><span class="bg"></span><span class="base"></span><span class="text">Playground</span></p></a>
*/
BoxButton.contextType = GridContext;
export default BoxButton;