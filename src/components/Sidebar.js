import React, {useEffect, useState} from "react";
import InputOptions from './buttons/InputOptions';
import EditButtons from './buttons/EditButtons';
import Algorithms from './buttons/Algorithms';
import Submit from './buttons/Submit';
import "./css/Sidebar.css";


export const Sidebar = ({ width, height, children }) => {
  const [xPosition, setX] = useState(-width);

  const toggleMenu = () => {
    if (xPosition < 0) {
      setX(0);
    } else {
      setX(-width);
    }
  };

useEffect(() => {
    setX(0);
  }, []);
  return (
      <div
        className="side-bar"
        style={{
          transform: `translatex(${xPosition}px)`,
          width: width,
          minHeight: height
        }}>

        <button
          onClick={() => toggleMenu()}
          className="toggle-menu"
          style={{
            transform: `translate(${width}px, 20vh)`,
            outline: `none`
          }}>
        </button>


        <div className="content">
          

          <div className="alert">
            <img src="https://img.icons8.com/plasticine/100/000000/gear.png"/>
          </div>

          <InputOptions/>
          <EditButtons/>
          <Algorithms/>
          <Submit />


        </div>


      </div>
  );
};

export default Sidebar