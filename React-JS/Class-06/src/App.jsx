import { React, useState } from "react";
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import Footer from "./Components/footer";
const userName = "Mustafa";
const App = () => {
  const getPrice = (price) => {
    console.log(price);
  };
  const [userName, setUserName] = useState("Mustafa");
  // const nameHandler = () => {
  //   setUserName("Shafay")
  // };
  return (
    <div>
      {/* <Navbar age={20} userName={userName} /> */}
      <h1>Hello {userName}</h1>
      <Navbar
        userName={userName}
        setUserName={setUserName}
        getPrice={getPrice}
      />
      {/* <Body /> */}
      {/* <Footer /> */}
      {/* <button onClick={nameHandler}>Click</button> */}
    </div>
  );
};

export default App;
