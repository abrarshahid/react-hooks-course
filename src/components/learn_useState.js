import { useState } from "react";

function Counter() {
  const [data,setData] = useState({clicked:0,theme:'blue'})
  const clicked = data.clicked
  const theme = data.theme
  const initial = () =>{
    console.log("started counter")
    return 0
  }
  const [value,setValue]= useState(()=>initial())
  const increment = () => setValue(prevCount=>prevCount+1)
  const decrement = () => setValue(prevCount=>prevCount-1)
  const makeGreen = () => setData(prevData=>{
    return {...prevData,theme:'green'}
  })
  const changeClick = () => setData(prevData=>{
    return {...prevData, clicked:prevData.clicked+1}
  })

  return (
      <div style={{'backgroundColor':theme}}>
        <button onClick={increment}>+</button>
        {value}
        <button onClick={decrement}>-</button>
        <button onClick={changeClick}>{clicked}</button>
        <button onClick={makeGreen}>Make it Green!</button>
      </div>
    );
  }
  
  export default Counter;
  