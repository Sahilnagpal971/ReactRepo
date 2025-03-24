  import React, { useState } from 'react';
  import Counter from './component'; // Import the Counter component
  import ToggleButton from './switch';
  import Greet from './Greet';
  import Parent from './Parent'
  //import Timer from './Timer'
  //import formation from './form'
 // import FormComponent from './FormComponent';

  function App() {

    // const [user, setUser]=useState("")
    // const [pass, setPass]=useState("")
    // const [email, setEmail] = useState("");
    // const [phone, setPhone] = useState("");

    // const handle =(e)=>{
    //   e.prevenDefault();

    // }
 

    return (
      <div>
        <h1>React Counter Example</h1>
        <Counter /> {/* Rendering the Counter component */}
        <ToggleButton/>
      
        <Greet name= "Inder Lal"/>
        <Greet name="Sahil Kumar" age={25}></Greet>
        {/* <Timer/> */}
        <h1>Welcome to My App</h1>
        {/* <form onSubmit={handle}>
        <FormComponent placeholder="Username" user={user} setUser={setUser}/> 
        <FormComponent placeholder= "Password" user={pass} setUser={setPass}/>
        <FormComponent placeholder= "email" user={email} setUser={setEmail}/>
        <FormComponent placeholder= "Phone" user={phone} setUser={setPhone}/>

        </form> */}
    
        <Parent/>
      </div>
    );
  }

  export default App;
