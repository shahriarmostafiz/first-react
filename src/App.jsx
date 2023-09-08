import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './counter'
import Team from './team'
import Users from './user'
import Friends from './friends'

function App() {
  // function handleClick(){
  //   alert('Button 1 Clicked')
  // }
  // function handleClick2(){
  //   alert ('Button 2 was clicked')
  // }
  // const   addFive = (value)  => {
  //   alert (value + 5)
  // }
  
  return (
    <>
    
      <h1>React Day 2</h1>
    <Friends></Friends>
    {/* <Users></Users> */}
      {/* <Team></Team> */}
      {/* <Counter></Counter> */}
      {/* <button onClick={handleClick} > Button 1</button> */}
      {/* <button onClick={handleClick2}>Button 2</button> */}
      {/* <div> */}

      {/* <button onClick={() => {alert('third times the charm')}}>Threeeeeeeeee */}
      {/* </button> */}
      {/* </div> */}
      {/* <button onClick={() => addFive(52)}>addFive</button> */}
    </>
  )
}

export default App
