
import React from "react";
import Child from  './Child'

function Parent(){
     const message="Hello , how are u doing"
     const response=" I am doing well beta"
    return (

        <>
        <Child  name ="Application"  age={26} isStudent= {1}></Child>
        <p> Message from Parent {message}</p>
        <p> Response from Child {response}</p>
        </>
        

    )
}
export default Parent