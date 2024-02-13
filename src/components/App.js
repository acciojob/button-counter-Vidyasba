
import React,{useState} from "react";
import './../styles/App.css';


const App = () => {
  
    const[count,setCount]=useState(0);

  const incrementCounter=()=>{
    setCount(count+1);
  }
  
  return (
    <div>
       <p>Button clicked {count} times</p>
       <button onClick={incrementCounter}>click me</button>
    </div>
  )
}

export default App
