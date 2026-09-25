import {React , useEffect} from "react";

const Child1 = ({getData}) => {
  useEffect(() => {
    console.log("Child1 Mount");
    return () => {
getData()
    };
  }, []);
  return <h1>Child 1</h1>;
};

export default Child1;
