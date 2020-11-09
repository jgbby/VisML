import React from 'react';
import { Navbar } from 'reactstrap';
import './css/Nav.css'
import { Component } from 'react';

class Nav extends Component {

    componentDidMount = () => {
        document.querySelector('nav').classList.add("loaded");
    }

    render(){

        return (
            <Navbar>
                <h3>VisML</h3>
                <h6>Created by Jamie Gabbay </h6>
            </Navbar>
        );
    }

};

export default Nav;