import React, { useState } from "react";
import Navbar from "./assets/Components/navbar";
import Body from "./assets/Components/body";
import Footer from "./assets/Components/footer";
const App = () => {
  const [userName, setUserName] = useState("Sheikh Mohammad");
let varUserName = "Mustafa"
const  [counter , setCounter] = useState(0)
console.log(varUserName, "varUserName");
console.log(counter, "counter");

  const stateHandler = () => {
    setUserName("Sheikh Mohammad Ahmed");
    console.log(userName, "userName");
  };
  console.log(userName, "userName");

// const varHandler = ()=>{
// varUserName = "Mustafa Shahzad"
// console.log(varUserName , "varUserName");

// }
// const counterHandler = ()=>{
//    setCounter(counter + 1)
//    console.log(counter);
   
// }

// useState
//1.String
//2.Number
//3.Boolean
//4.null
// 5. undefined => By Value => Non-Reference Data Type

// const name = "Sheikh Mohammad"
// const name2 = name
// let name3 = name2
// name3 = "Mustafa"
// //Output
// "Sheikh Mohammad" // new value
// "Sheikh Mohammad" // new value
// "Mustafa" //new value

// const arr = [1,2,3]
// const arr2 = arr
// //
// [1,2,3,5] // 12
// [1,2,3,, 5] // 12
// [1,2,3,, 5] // 12
// [1,2,3,, 5] // 12
// [1,2,3,, 5] // 12
// [1,2,3,, 5] // 12
//6.Array 
// 7.Object => Reference Data Type


let [arr , setArr] = useState([1,2,3]) //12345 !== 12345
const arrHandler = ()=>{
  
console.log(arr.push(4,5,6));

setArr([...arr , 4,5,6]) // 12345
console.log(arr , "arr");

}
console.log(arr , "arr");


  return (
    <div>
      <h1>Hello {userName}</h1>
      <h1>Hello {varUserName}</h1>
      <h1>My Counter :  {counter}</h1>
      <button onClick={stateHandler}>Change State</button>
      {/* <button onClick={varHandler}>Change Variable</button> */}
      {/* <button onClick={counterHandler}>Change Counter Variable</button> */}
      <button onClick={arrHandler}>Click</button>
    </div>
  );
};
export default App;
