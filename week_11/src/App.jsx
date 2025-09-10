import { useEffect, useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { usefetch } from './Hooks/useFetch'
import { usePrev } from './Hooks/use-prev'

// Custom Hooks useCounter
{/*
  function useCounter() {
    const [count, setCount] = useState(0);

    function increse_count() {
      setCount(count + 1);
    }

    return {
        count : count,
        increse_count : increse_count
    }
}
    */}


// Component Counter
{
  /* function Counter() {
    const {count, increse_count} = useCounter();

    return <div>
        <button onClick={increse_count}>Increase {count}</button>
    </div>
}
    */}


    {/*const [currentPost, setcurrentPost] = useState(1);
    const { finaldata, Loading } = usefetch("https://jsonplaceholder.typicode.com/posts/" + currentPost);
    
    if(Loading) {
      return <div>
        Loading...
      </div>
    }
      */}

    {/*<div>
      <button onClick={() => setcurrentPost(1)}>1</button>
      <button onClick={() => setcurrentPost(2)}>2</button>
      <button onClick={() => setcurrentPost(3)}>3</button>
    </div>
      {finaldata.body}
      */}


    {/*const [state, setstate] = useState(0);
    const prev = usePrev(state);

    return ( <div>
        <p>{state}</p>
        <button onClick={ () => setstate((curr) => curr + 1)} >Click Me</button>
        <p>The previous Value was {prev}</p>
      </div>
    )
      */}

  // import { useState, useEffect } from 'react';

  // const useDebounce = (value, delay) => {
  //     const [debouncedValue, setDebouncedValue] = useState(value);

  //     useEffect(() => {
  //         const handler = setTimeout(() => {
  //             setDebouncedValue(value);
  //         }, delay);

  //         return () => {
  //             clearTimeout(handler);
  //         };
  //     }, [value, delay]);

  //     return debouncedValue;
  // };


  function useFetch(url) {
    const [data, setData] = useState({});
    const [loading, setloading] = useState(true);

    async function getData(url) {
      setloading(true);
      const response = await fetch(url);
      const json = await response.json();
      setData(json);
      setloading(false);
    }

    useEffect(() =>{
      if(url) {
        getData(url);
      }
    },[url])

    return {
      data,
      loading
    }
  }


function useDebounce(originalFn) {
    const currentTime = useRef();

    const fn = () => {
      clearTimeout(currentTime.current);
      currentTime.current = setTimeout(originalFn, 200);
    }

    return fn
}


function App() {
  function search_backend() {
    fetch("api.amazon.com/search/");
  }

  const deBouncedFn = useDebounce(search_backend);


  return <div>
      <input type='text' onChange={deBouncedFn}></input>
  </div>
}

export default App
