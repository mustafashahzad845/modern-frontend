import React from 'react'

const Navbar = (props) => {
    const price = 15000
    // console.log(props);
    const {userName , setUserName , getPrice} = props
    console.log(userName);
    console.log(setUserName);
    const cities = ["Karachi" , "Hyderabad" , "Multan"]
    return (
     <div>

    {
        cities.map((city , index)=>{
console.log(city);
{/* <h1>{city}</h1> */}
        })
// for(val of cities){
// console.log(val);

// }
    }
        {/* // <h1>Hello {props.userName} </h1> */}
        {/* // <button onClick={ */}
        {/* //     ()=>{ */}
        {/* //      setUserName("Shafay")    */}
        {/* // }}>Click</button> */}
        {/* // <button>Get Price</button> */}
    <button onClick={()=>getPrice(price)}>Get Price</button>
     </div>
    )
}

export default Navbar
