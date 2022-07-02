
import React ,{ useState, useEffect } from 'react';

const useFetch = (url) => {
    const [data, setDate]= useState([]);
  const [loading, setLoading] = useState(true)
   const [error, setError] = useState(false);
  const fetchData=()=>{
    fetch(url)
    .then((r) => r.json())
    .then((r) => {setDate(r.items) ; setLoading(false)})
    .catch((e) => {setError(true); setLoading(false) })
  };


  useEffect(() => {
    fetchData()
  }, [])
  return {
        data,   loading,   error
  }
  
  
}

export default useFetch;