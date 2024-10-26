import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("black")

  return (
    <div className='w-full h-screen'
    style ={{backgroundColor:color}}>
    <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
      <div className="flex flex-wrap  justify-center gap-10 shadow-lg bg-white px-3 py-2 rounded-xl">
      <button onClick={()=>setColor("red")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} >Red</button>
      <button onClick={()=>setColor("blue")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} >Blue</button>
      <button onClick={()=>setColor("green")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}} >Green</button>
      <button onClick={()=>setColor("Aqua")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Aqua"}} >Aqua</button>
      <button onClick={()=>setColor("Indigo")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Indigo"}} >Indigo</button>
      <button onClick={()=>setColor("olive")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"olive"}} >olive</button>
      <button onClick={()=>setColor("black")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"black"}} >black</button>
      <button onClick={()=>setColor("orange")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} >orange</button>
      <button onClick={()=>setColor("Purple")} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor:"Purple"}} >Purple</button>
      </div>
    </div>
    </div>
  )
}

export default App
