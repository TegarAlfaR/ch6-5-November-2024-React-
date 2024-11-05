import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavbarWithStyling from './components/navbarWithStyling'
import HoverButton from './components/button/HoverButton'


function Navbar() {
  return (
    <div>
      <h1>hello fsw-2</h1>
      <ul>
        <li>About Me</li>
        <li>FAQ</li>
        <li>Logout</li>
      </ul>
    </div>
  )
}


function App() {
  const [count, setCount] = useState(0)

  const listMenu = ["Home", "About", "Logout", "age", "address"]

  return (
    <>
    <NavbarWithStyling 
    menu={listMenu}
    name="tegar"
    age= "20"
    address= "jakarata"/>

  <NavbarWithStyling 
    menu={listMenu}
    name="alfa"
    age= "20"
    address= "jakarata"/>

  <NavbarWithStyling 
    menu={listMenu}
    name="rizzi"
    age= "20"
    address= "jakarata"/>

  <HoverButton>
    <p>Test Children</p>
  </HoverButton>
    </>
  )
}

export default App
