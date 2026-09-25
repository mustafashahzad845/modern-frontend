import {React , useEffect} from 'react'

const Child2 = () => {
useEffect(() => {
    console.log("Child2 Mount");
    return () => {

    };
  }, []);
  return (
    <h1>Child 2</h1>
  )
}

export default Child2