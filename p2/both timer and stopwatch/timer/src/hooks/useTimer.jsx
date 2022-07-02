import {useState,useEffect} from 'react'
import { useRef } from 'react';

const useTimer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
     const interval= useRef(null)
    function toggle() {
        setIsActive(!isActive);
      }
    
      function reset() {
        setSeconds(0);
        setIsActive(false);
      }
      useEffect(() => {
        
        if (isActive) {
          interval.current = setInterval(() => {
            setSeconds(seconds => seconds + 1);
          }, 1000);
        } else if (!isActive && seconds !== 0) {
          clearInterval(interval);
        }
        return () => clearInterval(interval);
      }, [isActive, seconds]);
    
  return {
    seconds, isActive, toggle,reset
  }
}

export default useTimer