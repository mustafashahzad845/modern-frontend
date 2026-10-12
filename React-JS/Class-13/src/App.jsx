import React from 'react'
import { Link, NavLink, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import About from './pages/about'
import Contact from './pages/contact'
import PageNotFound from './pages/pageNotFound'
import style from "./style.module.css"
import Users from './pages/users'

const App = () => {
  // const activeLinkStyling = isActive ? color : "blue"   
  return (
<>
{/* <NavLink to="/" className={isActive ? color : "blue"} style={activeLinkStyling}>Home </NavLink>
<NavLink to="/about"  style={isActive ? color : "blue"} className={isActive}>About </NavLink>
<NavLink to="/contact" style={isActive ? color : "blue"} className={isActive}>Contact </NavLink> */}

<Link to="/">Home Page</Link>
<Link to="/users">User Page</Link>


<Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About />}/>
  <Route path='/contact' element={<Contact />}/>
  <Route path='/users' element={<Users />}></Route>
  <Route path='*' element={<PageNotFound />}/>
</Routes>

</>
  )
}

export default App