import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState('olive')
  //  function changeColor(color){
  //   setColor(color)
  //  }
  return (
    <div className='w-full h-screen duration-200 bg-black' style={{backgroundColor:color}}> 
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-2 shadow-lg  bg-yellow-200 px-3 py-2 rounded-3xl'>
          <button onClick={()=>setColor('red')}
          className='outline-none px-4 py-2 rounded-full text-black bg-red-600  shadow-lg'>red</button>
          <button onClick={()=>setColor('blue')}
          className='outline-none px-4 py-2 rounded-full text-black bg-blue-600 shadow-lg'>blue</button>
          <button onClick={()=>setColor('green')}
          className='outline-none px-4 py-2 rounded-full text-black bg-green-600  shadow-lg'>green</button>
         
    
        </div>

      </div>
    </div>
  )
}

export default App
