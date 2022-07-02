

import {useEffect, useState } from 'react';
import './App.css';
import TestComponent from './components/TestComponent';

import { Timeout} from "./Hooks/Timeout";
import useDebounce from './Hooks/useDebounce';
import useFetch from './Hooks/useFetch';
import useThrottle from './Hooks/useThrottle';


function App() {
  const ready = Timeout();
  const { data, loading, error}= useFetch("https://api.github.com/search/users?q=masai");
  const [count, setCount]= useState(0);
  // function debouncer(callback , delay){
  //   let debounceId;
  //   return function(){
  //     debounceId && clearTimeout(debounceId)
  //     debounceId= setTimeout(() =>
  //      {callback();
  //      },delay)
  //   }
  // }
  const handleScrollEvent=()=>{
    setCount((prev) => prev+1);
  }
  //  useDebounce(()=>{
  //   console.log(count);
  // },1000)

   useThrottle(() =>{
     console.log(count);
   },1000)
  useEffect(() => {
  window.addEventListener("scroll", handleScrollEvent);
    return () => {
      window.removeEventListener("scroll", handleScrollEvent);
    }
  }, [])
  return (
    <div className="App">
       <div  style={{postion:"sticky", top:"100px"}}>
             <h3>Scroll count:{count}</h3>
      </div>
      <h3>Timeout</h3>
      <div>{ready ? "Ready" : "Not-Ready"}</div>
      <TestComponent/>
      <hr/>
      <div className='App1'>
        {loading && "Loading"}
        {data?.length > 0 && data?.map((item) => {
          return(
            <div key={item.id}>
              {item.login}
              </div>
          )
        })}
      </div>
     
    </div>
  );
}

export default App;
