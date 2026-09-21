import React, { useState } from "react";
import jobData from "./job.js";
const App = () => {
  const [arr, setArr] = useState(["Karachi", "Lahore", "Hyderabad"]);
  // const uiArray = {
  //   arr.map((city , index)=>{
  //     return (
  //       <h1 key={index}> {city} {index + 1} </h1>
  //     )
  //   })
  // }
  //  const getInputVal = ()=>{
  //     console.log(inputVal);

  //   }
  //   const setInputContVal = ()=>{
  //     setInputVal("Mustafa")
  //   }
  //   const [inputVal , setInputVal] = useState("")

  //   console.log(inputVal);
// const [radioVal , setRadioVal] = useState("")
// console.log(radioVal);
console.log(jobData);

  return (
    <div>
      {jobData.data.map((job)=> {
return(
  <div>
    <h1>Company Name : {job.companyName}</h1>
  <h1>city : {job.city}</h1>
  <h1>position :{job.position}</h1>
  </div>
  // <h1>Company Name{job}</h1>
)
      })}

      {/* }) */}
      {/* {
  arr.map((city , index)=>{
    return (
      <h1 key={index}> {city} {index + 1} </h1>
    )
  })
} */}
      {/* <input id="input" type="text" placeholder="Enter Your Name" onChange={(e)=>setInputVal(e.target.value) 
} value={inputVal}/>
<button onClick={getInputVal}>Get Value</button>
<button onClick={se

tInputContVal}>Set Value</button>
<p>{inputVal}</p> */}

{/* <label htmlFor="">
  <input type="radio" name="gender" onChange={(e)=>setRadioVal(e.target.value)} value="male"/>Male
</label>
<label htmlFor="">
  <input type="radio" value="male" name="gender" onChange={(e)=>setRadioVal(e.target.value)}/>Female
</label> */}
    </div>
  );
};

export default App;
