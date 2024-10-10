import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Profile from './components/Profile'
import Login from './components/Login'
import UserContextProvider from './context/UserContextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
       <div className=''>
        LOGIN PAGE
        
        <Login/>
        <Profile/>
       </div>
    </UserContextProvider>
  )
}

export default App
