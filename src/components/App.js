import React from 'react'
import {useRef} from 'react';
import '../styles/App.css';
const App = () => {
  const ref= useRef(null);
  const handleClick = (event) =>{
    // use console.log
    console.log("Button id is:-", event.currentTarget.id);
  };

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button ref={ref} onClick={handleClick} id="button-a">Button A</button>
      <button ref={ref} onClick={handleClick} id="button-b">Button B</button>
    </div>
  );
};


export default App;
