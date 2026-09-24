import {React , useState} from 'react'
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import Footer from "./Components/footer";

const App = () => {
  const [userName , setUserName] = useState("Mustafa")
  const [isDarkTheme , setIsDarkTheme] = useState(false)
  
  const changeUserName = ()=>{
    setUserName("Mustafa Shahzad")
  }
  const getData = (()=>{
    console.log("Api Response");
    
  })()

  return (
    <div style={{background : isDarkTheme ? "black" : "white"}}>
      {/* <Navbar />
      <Body />
      <Footer /> */}
  <h1 style={{color : isDarkTheme ? "white" : "black"}}>Hello {userName}</h1>
  <button onClick={changeUserName}>click</button>
  <button onClick={
    ()=>{
      setIsDarkTheme(!isDarkTheme)
        // console.log(isDarkTheme , "isDarkTheme");
     
    }
 
  }>Dark Theme</button>
    </div>
  )
}

export default App