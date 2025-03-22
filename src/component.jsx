import React, { useState } from 'react';

function Counter(){

    const [count,setCount]=useState(0);
    const increment = ()=>setCount(count+1);
    //conditional decrement

    const decrement = ()=>{
        if (count>0){
       
            setCount(count-1);

        }
    }
       

    return (
<>
        <div>
            <p>Count:{count}</p>

            <button onClick={increment}>Increase</button>
            {/* {count} */}
            <button onClick={decrement}>Decrease</button>
        </div>
<div>
    
</div>
</>
    
    );

}
export default Counter