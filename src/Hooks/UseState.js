import { useState } from "react"
import "./UseState.css"
const UseState = () => {
    const [value, setValue] = useState(0);
    const [show, setShow]= useState(true)
    const Inc =()=>{
        setValue(value+1);
    }
    const Dec =()=>{
        setValue(value-1);
    }

  return (
    <div className="useState">
    <h4>UseState hook</h4>
    <div className=" btnn" style={{display :show ? "block":"none"}}>
    <button style={{color:"green"}} onClick={Inc}>incresment</button>
    <div>value : {value}</div>

    <button style={{color:"red"}} onClick={Dec}>decresment</button>
    </div>
     <button className="show" onClick={()=>setShow(!show)}>Show</button>
    </div>
  )
}

export default UseState