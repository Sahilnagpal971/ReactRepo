import React from "react";




function FormComponent(props) {

    



  return (
    <div>
     {/* <label>Username:</label> */}
     <input placeholder={props.placeholder} onChange={e=>props.setUser(e.target.value)}/>

     

    
     
    </div>
  );
}

export default FormComponent; // ✅ Export the component
