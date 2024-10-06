import { useState } from 'react'

import './App.css'

function App() {
//! const [ variable,method] = useState(initialValue)
  const [counter,setCounter] = useState(15)
  // let counter = 15 //variable injection
 const addValue = ()=>{
  setCounter(counter+1) // method definiton
 }
  const removeValue = ()=>{
    setCounter(counter-1)
  }

  return (
    <>
   <h1>react course {counter} </h1>
   <h2>counter value : {counter} </h2>
   <button
   onClick={addValue}>Add Value</button> {" "}
   <button
   onClick ={removeValue}>Remove value</button>
   <p>footer: {counter} </p>
    </>
  )
}

export default App
