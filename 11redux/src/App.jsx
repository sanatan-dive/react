import { useState } from 'react'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {


  return (
   <div className='h-screen  bg-slate-500'>
    <AddTodo/>
    <Todos/>
   </div>
  )
}

export default App
