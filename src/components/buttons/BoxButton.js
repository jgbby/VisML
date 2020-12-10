import React from 'react';
import { GridContext } from '../GridContext';
import "../css/BoxButton.css"

class BoxButton extends React.Component {

    render() {
        return (
            <div id="boxButton">
                <div><a href="#">
                    <p><span class="bg"></span><span class="base"></span><span class="text">Play</span></p></a><a class="white" href="#">
                    <p><span class="bg"></span><span class="base"></span><span class="text">Play Valorant</span></p></a><a class="transparent" href="#">
                    <p><span class="bg"></span><span class="base"></span><span class="text">Play Valorant</span></p></a></div>
            </div>
        )
    }
}

BoxButton.contextType = GridContext;
export default BoxButton;