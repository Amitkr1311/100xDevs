
// // mounting, re-rendering, unmounting
// function Counter() {
//   const [count, setcount] = useState(1);

//   console.log("counter");

//   // gaurd our setinterval from re-renders
//   useEffect(function(){
  //     let clock = setInterval(function (){
    //       // setcount(count => count + 1)
    //       console.log("from inside setInterval");
    //       setcount(function(count){
      //         return count + 1;
      //       })
      //     },1000)
      
      //     return function(){
        //       console.log("Unmounted");
        //       clearInterval(clock)
        //     }
        //   },[]);

//   // button for increasing counter
//   function increase_counter(){
//     setcount(count + 1);
//   }

//   // setInterval(function() {
  //   //   setcount(count + 1);
  //   // },1000)
  //   // function decrease_counter() {
    //   //   setcount(count - 1);
    //   // }
    //   // function reset_counter() {
      //   //   setcount(0);
      //   // }
      //   return <div>
      //     <h1>{count}</h1>
      //     {/* <button onClick={increase_counter}>Increase Count</button> */}
      //     {/* <button onClick={decrease_counter}>Decrease Count</button>
      //     <button onClick={reset_counter}>Reset Count</button> */}
      //   </div>
      // }


  import { useEffect, useState } from "react";
  
  // Re-learning CleanUp, useEffect, learning about dependency array
  function App() {
        const [count, setCount] = useState(0);
        const [count2, setCount2] = useState(0);

        function increse(){
          setCount(c => c + 1);
        }

        function decrese(){
          setCount2(c => c - 1);
        }

        return <div>
          <Counter count={count} count2={count2} />
          <button onClick={increse}>Increase</button>
          <button onClick={decrese}>Decrese</button>
        </div>
  }

  function Counter(props) {
    useEffect(function() {
      console.log("Mounted");

      return function() {
        console.log("Unmounted");
      }
    },[])

    useEffect(function() {
      console.log("change in count");

      return function() {
        console.log("cleanup inside second effect");
      }
    },[props.count, props.count2])


    return <div>
      Counter1 {props.count} <br/>
      Counter2 {props.count2} <br/>
    </div>
  }
      
  export default App
      