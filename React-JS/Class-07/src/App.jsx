import React, { useState } from 'react'
const App = () => {
  const [arr , setArr] = useState(["Karachi" , "Lahore" , "Hyderabad"])
  // const uiArray = {
//   arr.map((city , index)=>{
//     return (
//       <h1 key={index}> {city} {index + 1} </h1>
//     )
//   })
// } 
 const getInputVal = ()=>{
    console.log(inputVal);
    
  }
  const setInputContVal = ()=>{
    setInputVal("Mustafa")
  }
  const [inputVal , setInputVal] = useState("")
   
  console.log(inputVal);
  
  return (
    <div>
{/* {
  arr.map((city , index)=>{
    return (
      <h1 key={index}> {city} {index + 1} </h1>
    )
  })
} */}
<input id="input" type="text" placeholder="Enter Your Name" onChange={(e)=>setInputVal(e.target.value) 
} value={inputVal}/>
<button onClick={getInputVal}>Get Value</button>
<button onClick={setInputContVal}>Set Value</button>
<p>{inputVal}</p>

    </div>
  )
}

export default App