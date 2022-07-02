import React,{useEffect,useRef} from 'react'

const useDebounceCallback = (func,delay) => {
    const debounceId=useRef();


    useEffect(()=>{
         debounceId= setTimeout(()=>{
            func()
        },delay);
        return  ()=>{
            clearTimeout(debounceId)
        }
    },[delay,func])
  return (
    <div>useDebounceCallback</div>
  )
}

export default useDebounceCallback