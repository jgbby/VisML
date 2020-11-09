import React from 'react';
import { Container, Row, Col, Button, ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import Slider from './Slider'
import './css/Grid.css';
import { GridContext } from './GridContext';

import Perceptron from './ml/Perceptron';
import map from './ml/Utils';


const CELL_SIZE = 50;
const WIDTH = 1000;
const HEIGHT = 1000;


class Grid extends React.Component {

    
    constructor() {
        super();
        this.rows = HEIGHT / CELL_SIZE;
        this.cols = WIDTH / CELL_SIZE;
        this.board = this.makeEmptyBoard();
        this.canvas = null;
        this.isDown = false;

    }
    makeEmptyBoard() {
        /**
         * Makes an empty board
         */
        let board = [];
        for (let y = 0; y < this.rows; y++) {
            board[y] = [];
            for (let x = 0; x < this.cols; x++) {
                board[y][x] = 0;
            }
        }return board;
    }
    
    renderBoard = () => {
        /**
         * Renders the current board's state
         */
        for (let row=0; row < this.rows; row++){
            for (let col=0; col < this.cols; col++){
                this.renderCell(row, col)
            }
        }
    }



    renderCell (row, col) {
        /**
         * @param {*} row 
         * @param {*} col 
         */
        let c = this.canvas.getContext("2d");
        let colorIndex = this.board[row][col]
        let margin = 10
        
        c.fillStyle = this.colors[colorIndex];
        c.fillRect(
            col * CELL_SIZE,
            row * CELL_SIZE,
            CELL_SIZE - margin,
            CELL_SIZE - margin
        );
        c.stroke();
    }

    getFilledCells () {
        /**
         * Returns all filled in cells
         * Rotate specifies whether coordinate will be adjusted so (0,0) is the bottom left
         */
        var filledCells = [[],[]]
        for (let i=0; i < this.rows; i++){
            for (let j=0; j < this.cols; j++){
            
                // If we've found a filled cell
                if (this.board[i][j] != 0){
                    // check rotation
                    filledCells[0].push([j, this.rows - i - 1]);
                    filledCells[1].push(this.board[i][j]);

                } 
            }
        }
        console.log(filledCells);
        return filledCells;
    }



    handleClick = (event) => {
        /**
         * @param {event} event
         * @return void
         * Handles click events
         */
        let x = event.clientX;
        let y = event.clientY;
        
        var rect = this.canvas.getBoundingClientRect();
        let X = x - rect.left;
        let Y = y - rect.top;
        let row = Math.floor(Y / CELL_SIZE);
        let col = Math.floor(X / CELL_SIZE);

        if (this.board[row][col] != this.context.state.ColorIndex){

            this.board[row][col] = this.context.state.ColorIndex;
            this.renderCell(row, col)
        }
        
    }
    

    handleClear = () => {
        /**
         * @param void
         * @return void
         * Clears the grid
         */
        // context boolean value that in this function it will turn false, but from the sidebar we'll turn it true
        this.board = this.makeEmptyBoard();
        this.renderBoard();
    }

    drawLine = (x1, y1, x2, y2, color) => {

        let c = this.canvas.getContext("2d");
        c.strokeStyle = color;
        c.lineWidth = 5;
        c.beginPath();
        c.moveTo(x1, y1)
        c.lineTo(x2, y2);
        c.stroke();
    }

    map = (value, a1, a2, b1, b2) => (value - a1) * (b2 - b1) / (a2 - a1) + b1;

    handleSubmit = (data) => {
        /**
         * @param void
         * @return void
         * 
         */
        let boardDimension = 20;

        var brain = new Perceptron(2);
        let inputs = data[0];
        let labels = data[1];
        for (let i=0; i < data[0].length; i++){

            // Preprocessing: Must make labels [-1, 1] and the x, y values of each point [-20, 20]
            let label = this.map(labels[i], 1, 2, -1, 1);
            let point = inputs[i];

            let xReal = this.map(point[0], 0, boardDimension, -boardDimension, boardDimension) 
            let yReal = this.map(point[1], 0, boardDimension, -boardDimension, boardDimension) 
            let pointReal = [xReal, yReal]
            
            // Training
            brain.train(pointReal, label);
        }

        // Display new line: First map prediction points from [-20, 20] to [0, 20]
        let p1_predictReal = [-1 * boardDimension, brain.predictY(-1 * boardDimension)];
        let p2_predictReal = [1 * boardDimension, brain.predictY(1 * boardDimension)]
        let x1 = this.map(p1_predictReal[0], -boardDimension, boardDimension, 0, this.canvas.width);
        let y1 = this.map(p1_predictReal[1], -boardDimension, boardDimension, this.canvas.height, 0);
        let x2 = this.map(p2_predictReal[0], -boardDimension, boardDimension, 0, this.canvas.width);
        let y2 = this.map(p2_predictReal[1], -boardDimension, boardDimension, this.canvas.height, 0);
        this.drawLine(x1, y1, x2, y2, "red");




    }


    componentDidMount = () => {
        console.log("Board")
        this.canvas = document.querySelector("canvas");
        this.canvas.width = 1000;
        this.canvas.height = 1000;
        this.renderBoard();

        this.canvas.addEventListener("mousemove", event => {
            if (this.isDown == true) this.handleClick(event);
        })
    }

    // Rendering
    render() {

        // Setup for refresh
        this.colors = this.context.state.Colors;
        this.colorIndex = this.context.state.ColorIndex;
        if (this.context.state.Clear) {
            this.handleClear();
            this.context.setClear(false);
        }
        if (this.context.state.Submit){
            this.handleSubmit(this.getFilledCells());
            this.context.setSubmit(false);
        }

        return (
            <div>
                <p>{ console.log(this.context.state.Slider) }</p>
                <div className="grid">
                    <canvas 
                        onClick={this.handleClick}
                        onMouseDown={() => this.isDown = true} 
                        onMouseUp={() => this.isDown = false}
                    ></canvas>

                </div>
            </div>
        );
    }
}

Grid.contextType = GridContext;
export default Grid;