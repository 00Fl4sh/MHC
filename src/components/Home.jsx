import React, { useState } from 'react'

export default function Home() {
  let text="Football";
  const[counter,setCounter]=useState(0)
  const increment=()=>{
    setCounter(counter+1)
  }
  const[count,setCount]=useState(0)
  const decrement=()=>{
    setCount(count-1)
  }
  const minus=()=>{
    if (counter>0) {
      setCounter(counter-1)
      
    }}
  const plus =()=>{
    if (count<0) {
      setCount(count+1)
      
    }

  }
  return (
      <div>
    <div className='container'>
      <h1 className='football'>{text}</h1>
      <h3 className='welcome'>Welcome  to {text} Match...</h3>

      </div>
      
      <h3 className='score'>{counter}-{count}</h3>
      <h1 className='teamA'>Team A score</h1>
      <button onClick={increment}>Team A</button>
      <button onClick={minus}>Team -A</button>
      <button onClick={decrement}>Team B</button>
      <h1 className='teamB'>Team B score</h1>
      <button onClick={plus}>Team -B</button>
    </div>
  )
}
