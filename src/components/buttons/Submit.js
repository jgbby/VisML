import React from 'react';
import { Button, Label } from 'reactstrap';
import { GridContext } from '../GridContext';

class Submit extends React.Component {

    render() {
        return (
            <div className="submit">
            <Button className="button" id="submit" color="info" onClick={() => this.context.setSubmit(true)}>
              <img src="https://img.icons8.com/dusk/64/000000/artificial-intelligence.png"/>
              <Label>Run</Label>
            </Button>
          </div>
        )
    }
}

Submit.contextType = GridContext;
export default Submit;