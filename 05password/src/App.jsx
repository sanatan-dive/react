
import { useState, useCallback, useEffect, useRef } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [symbolAllowed,setSymbolAllowed] = useState(false)
  const [password,setPassword] = useState('')
  const passwordRef = useRef(null)
  const generatePassword = useCallback(
    () => {
      let pass = ''
      let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'

      if(numberAllowed){
        str += '0123456789'
      }
      if(symbolAllowed){
        str += '!@#$%ls^&*(){}[]'
      }

      for(let i = 0; i < length; i++){
        pass += str.charAt(Math.floor(Math.random() * str.length))
      }
      setPassword(pass)
    },[length,numberAllowed,symbolAllowed]
  )
  const copyToclip = ()=>{
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
  }


  useEffect(()=>{generatePassword()},[length,numberAllowed,symbolAllowed])
  

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-700 text-orange-500 ">
    <h1 className="text-white text-center my-3 ">Password Generator</h1>
    <div className='flex shadow rounded-lg overflow-hidden'>
      <input type="text" 
      value={password}
      className='outline-none w-full py-1 px-3'
      placeholder='password'
      readOnly
      ref={passwordRef}
      />
      <button onClick={copyToclip} className='outline-none bg-blue-700 text-white px-3 py-0. shrink-0'>
        copy
      </button>
  <div
      className='flex text-sm gap-x-2   '>

      </div>
    
    </div>
    <div className=' flex items-center gap-x-2 '>
      <input type="range" min = {6} max = {20} value={length} classname="cursor-pointer"
      onChange={(e)=>setLength(e.target.value)}  name = "length" id="" />
      <label htmlFor="length" className="text-white"> {length}</label>


    </div>
    <div className=' flex items-center gap-x-2 '>
      <input type="checkbox" name="" defaultChecked={numberAllowed} onChange={()=>setNumberAllowed((prev)=>!prev)} id="" />
      <label htmlFor="number">numbers</label>


    </div>
    <div className=' flex items-center gap-x-2 '>
      <input type="checkbox" name="" defaultChecked={symbolAllowed} onChange={()=>setSymbolAllowed((prev)=>!prev)} id="" />
      <label htmlFor="character">characters</label>


    </div>
    </div>
  )
}

export default App
