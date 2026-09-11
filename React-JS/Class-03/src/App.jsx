import React from "react";
import Navbar from "./Componenets/navbar";
import Body from "./Componenets/body";
import Footer from "./Componenets/footer";

const App = () => {

const userName = "Mustafa"
const foo = (element , ...users)=>{
  // console.log(`Hello ${users[1]}`);
  // console.log(element.target);
  return (
    <div>
      <h1>Hello World</h1>
    </div>
  )
  
}

  return (
  <div className="heading">
      <Navbar />
    <Body />
    <Footer />
  </div>


  
  )
}

export default App