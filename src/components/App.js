import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // use console.log
    console.log("Button id is:-"event.currentTarget.id);

  }
  constu

  // do not remove the two buttons or change their id
  return (
    <div id="main">
      <button onClick={this.handleClick} id="button-a">Button A</button>
      <button onClick={this.handleClick} id="button-b">Button B</button>
    </div>
  )
}


export default App;
