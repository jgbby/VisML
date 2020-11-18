import React from 'react';


 
import { GridContext } from './GridContext';

import { Container, Row, Col } from 'reactstrap';
import './css/AlgoInfo.css'



class AlgoInfo extends React.Component {

  render() {

    return (
      <div className="AlgoInfo">
        <Container>
        <Row xs="6">
          <Col>
             <p>
              A perceptron is much like this little neuron. The neuron receives electrical signals (inputs) 
              through the dendrites, which are then processed to generate some sort of ‘output’. In the case 
              of our little Perceptron, it will receive two numbers, point (x, y), and those will be processed 
              to produce some output, whether or not it is blue or red.
            </p>
         
          </Col>
        </Row>
        </Container>
         <img src="https://curiositykilledthecation.files.wordpress.com/2017/10/transmit.gif?w=480"></img>
         
      </div>
    );
  };
}

AlgoInfo.contextType = GridContext;
export default AlgoInfo;