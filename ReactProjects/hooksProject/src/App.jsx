import { useState } from 'react'

import './App.css'


function App() {
  let [counter,setCounter] = useState(5)
  // let counter= 5

  const addValue = ()=>{
    if (counter<20) {
      counter = counter+1
      setCounter(counter)
      console.log(counter)
    }
  }
  const removeValue = ()=>{
    if (counter>0)  setCounter(counter - 1);
  }

  return (
    <>
      <h1>junaid</h1>
      <h2>conter Value : {counter} </h2>
      <button 
      onClick={addValue}
      >Add value {counter} </button>
      <br />
      <button
      onClick={removeValue}
      >remove value {counter} </button>
    </>
  )
}

export default App
