import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './contexts'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev)=>[{id:Date.now(),...todo},...prev])
  }
  const updateTodo = (id,todo) => {
    setTodos((prev)=>prev.map((prevTodo)=>(prevTodo.id===todo.id?todo:prevTodo)))
  }
  const deleteTodo = (id) => {
    setTodos((prev)=>prev.filter((prevTodo)=>(prevTodo.id!==id))) //gives all the to do which does not have the same id 
  }

  const toggleComplete = (id) => {
    setTodos((prev)=>
    prev.map((prevTodo) =>
    prevTodo.id === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo)) //TODO what does spreading means in js
  }

  useEffect(() => {
const todos = setTodos(JSON.parse(localStorage.getItem("todos")))

if(todos && todos.length > 0){
  setTodos(todos)
}
  
   
  }, [])
  

  useEffect(() => {
    localStorage.setItem("todos",JSON.stringify(todos))
  }, [todos])

  return (
    // it provides the context 
    <TodoProvider value = {{todos,addTodo,updateTodo,deleteTodo,toggleComplete}}> 
    <div className='w-full h-screen'>
      test for tailwind
    </div>
    </TodoProvider>
  )
}

export default App
