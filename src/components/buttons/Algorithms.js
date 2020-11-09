import React from 'react';
import { Dropdown, ButtonDropdown, DropdownToggle, DropdownItem, DropdownMenu } from 'reactstrap';
import { GridContext } from '../GridContext';


class Algorithms extends React.Component {
    
    state = {
        dropdownOpen: false,
        algorithm: "Select Algorithm",
      }

      setOpen = (bool) => this.setState({ dropdownOpen: bool });
      toggle = () => this.setOpen(!this.state.dropdownOpen);
      setAlgo = (algo) => {
        /**
         * Updates the current Algorithm in use
         */
        this.setState({ algorithm: algo });
        if (algo == 'Perceptron') this.context.setColors(['white', 'purple', 'green']);
        else if (algo == 'KNN' || algo == 'Random Forest') this.context.setColors(['white', 'red', 'blue', 'yellow', 'green']);
      
      };


    render(){
        return (
            <div className="algos">
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    {this.state.algorithm}
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem onClick={() => this.setAlgo("Perceptron")}>Perceptron</DropdownItem>
                    <DropdownItem onClick={() => this.setAlgo("KNN")}>KNN</DropdownItem>
                    <DropdownItem onClick={() => this.setAlgo("Random Forest")}>Random Forest</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
            </div>
        )
    }

}

Algorithms.contextType = GridContext;
export default Algorithms;