import React from 'react';
import Counter from './component'; // Import the Counter component
import ToggleButton from './switch';
import Greet from './Greet';
import Parent from './Parent'

function App() {
  return (
    <div>
      <h1>React Counter Example</h1>
      <Counter /> {/* Rendering the Counter component */}
      <ToggleButton/>
      <Greet name= "Inder Lal"/>
      <Greet name="Sahil Kumar" age={25}></Greet>
      <Parent/>
    </div>
  );
}

export default App;
