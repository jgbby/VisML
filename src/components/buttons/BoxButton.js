import React from 'react';
import { GridContext } from '../GridContext';
import "../css/BoxButton.css"

import { NavLink } from 'react-router-dom'

class BoxButton extends React.Component {

    render() {
        return (
            <div id="boxButton">

                <NavLink to={this.props.to}>
                    <div className="outer">
                        <label to="/play">{this.props.label}</label>
                        <div className='inner'>

                        </div>
                    </div>
                </NavLink>
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