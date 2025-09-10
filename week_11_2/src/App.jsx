import { useEffect, useState, memo } from "react";
import "./App.css";
import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
import { counterAtom, evenSelector } from "./store/atoms/counter";

function App() {

  return <div>
    <RecoilRoot>
      <Buttons />
      <Counter />
      <Even />
    </RecoilRoot>
  </div>
}

function Buttons() {

  const setCount = useSetRecoilState(counterAtom);

  function increase() {
    setCount(c => c + 2);
  }

  function decrease() {
    setCount(c => c - 1);
  }

  return <div>
    <button onClick={increase}>Increase</button>
    <button onClick={decrease}>Decrease</button>
  </div>
}

function Counter() {
  const count = useRecoilValue(counterAtom);

  return <div>
    {count}
  </div>
}

function Even() {
  const is_even = useRecoilValue(evenSelector)
  return <div>
    {is_even ? "even" : "odd"}
  </div>
}

export default App;







// import { RecoilRoot, useRecoilValue, useSetRecoilState } from "recoil";
// import { counterAtom } from "./store/atoms/counter";

// // MEMO

// function App() {
//   return (
//     <div>
//       <Counter />
//     </div>
//   );
// }

// function Counter() {
//   const [count, setCount] = useState(0);

//   useEffect(() => {
//     setInterval(() => {
//       setCount((c) => c + 1);
//     }, 3000);
//   }, []);

//   return (
//     <div>
//       <CurrentCount count = {count}/>
//       <Increase />
//       <Decrease />
//     </div>
//   );
// }

// //const MemoizedCurrentCount = memo(CurrentCount);

// const CurrentCount = memo(function ({count}) {
//   return <div>
//         {count}
//       </div>;
// });

// const Increase = memo(function() {
//   function increase() {}

//   return (
//     <div>
//       <button onClick={increase}>Increase</button>
//     </div>
//   );
// })

// const Decrease = memo(function() {
//   function decrease() {}

//   return (
//     <div>
//       <button onClick={decrease}>Decrease</button>
//     </div>
//   );
// })

// export default App;

// // RECOIL
// {
//   /*function App() {

//   return (
//     <RecoilRoot>
//       <Counter />
//     </RecoilRoot>
//   )
// }

// function Counter() {

//   return <div>
//     <CurrentCount />
//     <Increase />
//     <Decrease />
//   </div>
// }

// function CurrentCount() {
//   const count = useRecoilValue(counterAtom);
//   return <div>
//     {count}
//   </div>
// }

// function Decrease() {

//   const setCount = useSetRecoilState(counterAtom);

//   function decrease() {
//     setCount(c => c - 1);
//   }

//   return <div>
//     <button onClick={decrease}>Decrease</button>
//   </div>
// }


// function Increase() {
//   const setCount = useSetRecoilState(counterAtom);

//   function increase() {
//     setCount(c => c + 1);
//   }

//   return <div>
//     <button onClick={increase}>Increase</button>
//   </div>
// }*/
// }
