import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Users = () => {
    const [searchParam , setSearchParam] = useSearchParams()
    console.log(searchParam);
    
  return (
    <h1>Users Page</h1>
  )
}

export default Users