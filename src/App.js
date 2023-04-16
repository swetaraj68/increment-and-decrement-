import React,{useState} from "react";
import "./style.css";

export default function App() {
  const[count,setcount]=useState(0)
  function handledec(){
    setcount(count-1)
  }
  function handleinc(){
    setcount(count+1)
  }
  return (
    <div className="mainDiv">
    <div className="body">
      <div className="first">
     <button className="first" onClick={handleinc}>Increment</button>
     </div>
     <div className="second">
     {count}
     </div>
     <div>
     <button onClick={handledec} className="first">decrement</button></div>
    </div>
    </div>
  );
}
