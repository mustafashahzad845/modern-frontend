import React, { useState } from 'react'
const App = () => {
  const [arr , setArr] = useState(["Karachi" , "Lahore" , "Hyderabad"])
  // const uiArray = 
  return (
    <div>
{
  arr.map((city , index)=>{
    return (
      <h1 key={index}> {city} {index + 1} </h1>
    )
  })
}
    </div>
  )
}

export default App