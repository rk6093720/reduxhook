import React from 'react'
import { Timeout } from '../Hooks/Timeout';
const TestComponent = () => {
    const ready3= Timeout(5000);
  return (
    <div>
        
      <h3> TestComponent</h3> 
      <div>{ready3 ? "Ready3" : "Not-Ready3"}</div>
        
        
    </div>
  )
}

export default TestComponent