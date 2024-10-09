import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import SignUp from './components/SignUp.jsx'
import Home from './components/Home.jsx'
//import './App.css'

const App = ()=> {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home/>
    </>
  )
}

export default App
