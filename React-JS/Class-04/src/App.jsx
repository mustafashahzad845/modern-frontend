// import React from 'react'
// import Navbar  from "./Components/Navbar.jsx"
// import Body  from "./Components/Body.jsx"
// import Footer from "./Components/Footer.jsx"
// const App = () => {

// const greet = ( e,  user   )=>{
//     console.log(`Hello ${user}` );
//     console.log(e?.target);

// }

//   return (
//     <>
//       {/* <Navbar />
//       <Body />
//       <Footer /> */}
//       {/* <button onClick={(element)=>greet(element , "Mustafa")}>Greet</button> */}
//     </>
//   );
// }

// export default App

import React, { useState } from "react";
const App = () => {
  // let user = "Mustafa"
  // const ChangeName = ()=>{
  //     user = "Shafay"
  //     console.log(user, "after fnc call");

  // }
  // console.log(user , "before fnc call");
  const [btnText, setBtnText] = useState("Change Name");
  const [userName, setUserName] = useState("Mustafa");
  const changeName = (btn) => {
    // setState("Shafay")
    // console.log(state , "after func call");
    // console.log(btn?.innerHTML);
    // console.log(element.target.innerHTML);

    if (userName == "Mustafa") {
      setUserName("Shafay");
      setBtnText("Revert");
    } else {
      setUserName("Mustafa");
      setBtnText("Change Name");
    }
  };
  // console.log(state , "before fnc call");

  return (
    <>
      <h1>Hello {userName}</h1>
      <button onClick={(element) => changeName(element)}>{btnText}</button>
    </>
  );
};
export default App;
