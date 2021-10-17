import { useState, useMemo } from "react"

function Usememo() {
    const [number, setNumber] = useState(0)
    const [dark, setDark] = useState(false)
    const doubleNumber = useMemo(()=>{
        return slowfunc(number)
    },[number])
        const themeStyles = {
        backgroundColor: dark ? 'black' : 'white',
        color: dark ? 'white' : 'black'
    }
    return(
        <div>
            <input type="number" value={number} onChange={e=> setNumber(e.target.value)}/>
            <button onClick={()=> setDark(prevDark => !prevDark)}>Change Theme</button>
            <div style={themeStyles}>{doubleNumber}</div>
        </div>
    )
    function slowfunc(num){
        console.log("running slow function")
        for(let i=0; i<=10000000;i++){}
        return num*2
    }
  }
  
  export default Usememo;
  