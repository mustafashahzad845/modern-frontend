import React from 'react'
import Navbar  from "./Components/Navbar.jsx"
import Body  from "./Components/Body.jsx"
import Footer from "./Components/Footer.jsx"
const App = () => {

const greet = ( e,  user   )=>{
    console.log(`Hello ${user}` );
    console.log(e?.target);
    
}

  return (
    <>
      {/* <Navbar />
      <Body />
      <Footer /> */}
      <button onClick={(element)=>greet(element , "Mustafa")}>Greet</button>
    </>
  );
}

export default App