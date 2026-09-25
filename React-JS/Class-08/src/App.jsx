import {React , useState , useEffect} from 'react'
import Navbar from "./Components/navbar";
import Body from "./Components/body";
import Footer from "./Components/footer";
import Child1 from "./Components/child1";
import Child2 from "./Components/child2";
const App = () => {
  // const [userName , setUserName] = useState("Mustafa")
  const [isDarkTheme , setIsDarkTheme] = useState(false)
  // const [counter , setCounter] = useState(0)
  const [isFirstChild , setIsFirstChild] = useState(false)
  // const changeUserName = ()=>{
  //   setUserName("Mustafa Shahzad")
  // }
  const getData = ()=>{
    console.log("Api Response");
    
  }
  // useEffect(
  //   ()=>{
  //     getData()
  //   } , [isFirstChild]
  // )


  // const counterHandler = ()=>{
  //   setCounter(counter+1)
  // }

  return (
  //   <div style={{background : isDarkTheme ? "black" : "white"}}>
  //     {/* <Navbar />
  //     <Body />
  //     <Footer /> */}
  // <h1 style={{color : isDarkTheme ? "white" : "black"}}>Hello {userName}</h1>
  // <h1 style={{color : isDarkTheme ? "white" : "black"}}>Counter {counter}</h1>
  // <button onClick={changeUserName}>click</button>
  // <button onClick={()=>  setIsDarkTheme(!isDarkTheme)
  //       // console.log(isDarkTheme , "isDarkTheme");
    
  // }>Dark Theme</button>
  // <button onClick={counterHandler}>Increase Counter</button>
  //   </div>

  <div>
    {
    isFirstChild ? <Child1 getData={getData} /> :  <Child2 />
    }

    <button onClick={
  ()=>{
    setIsFirstChild(!isFirstChild)
    console.log(isFirstChild , "isFirstChild");
    
  }
}>Change Child</button>
  </div>
  )
}

export default App