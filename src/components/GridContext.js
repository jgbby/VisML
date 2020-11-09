import React, { Component } from 'react'

export const GridContext = React.createContext()

export class GridProvider extends Component {

    // Context state
    state = {
        Colors: ["white", "blue", "red"],
        ColorIndex: 1,
        Clear: false,
        Submit: false,
        Slider: 0,
    }

    setGrid = (grid) => this.setState({
        Grid: grid
    })
    setColors = (colors) => this.setState({
        Colors: colors
    })
    setColorIndex = (index) => this.setState({
        ColorIndex: index
    })
    setClear = (bool) => this.setState({
        Clear: bool
    })
    setSubmit = (bool) => this.setState({
        Submit: bool
    })
    setSlider = (num) => this.setState({
        Slider: num
    })

    render() {

        return (
        <GridContext.Provider value={{ 
            
            state: this.state,
            setClear: this.setClear,
            setSubmit: this.setSubmit,
            setGrid: this.setGrid,
            setColors: this.setColors,
            setColorIndex: this.setColorIndex,
            setSlider: this.setSlider
        
        }}>

            {this.props.children}

        </GridContext.Provider>
        )
    }
}