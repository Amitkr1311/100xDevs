//import {BrowserRouter, Routes, Route, Link, Outlet} from 'react-router-dom';

import { useEffect, useRef, useState } from "react";

// In React, useRef is a hook that provides a way to create a
// reference to a value or a DOM element that persists across
// renders but does not trigger a re-render when the value changes.

function App() {
  const [count, setCount] = useState(0);
  const [timer,setTimer] = useState(0);
  const ref_count = useRef(null);
  let value;

  function start_watch() {
      value = setInterval(() =>{
      setCount(count => count + 1);
      ref_count.current = value;
    },1000)

  }

  function stop_watch() {
    clearInterval(ref_count.current);
  }

  return (
    <div>
      {count}
      <br />
      <button onClick={start_watch}>Start</button>
      <button onClick={stop_watch}>Stop</button>
    </div>
  );
}


export default App;



// import React, { useEffect, useRef, useState } from 'react';

// function Chat() {
//   const [messages, setMessages] = useState(["Hello!", "How are you?"]);
//   const chatBoxRef = useRef(null);

//   // Function to simulate adding new messages
//   const addMessage = () => {
//     setMessages((prevMessages) => [...prevMessages, "New message!"]);
//   };

//   // Scroll to the bottom whenever a new message is added
//   useEffect(() => {
//     chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
//   }, [messages]);

//   return (
//     <div>
//       <div 
//         ref={chatBoxRef} 
//         style={{ height: "200px", overflowY: "scroll", border: "1px solid black" }}
//       >
//         {messages.map((msg, index) => (
//           <div key={index}>{msg}</div>
//         ))}
//       </div>
//       <button onClick={addMessage}>Add Message</button>
//     </div>
//   );
// }

// export default Chat;


  /* function App() {
  return <div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route path = "/neet/online-coaching-class-11" element={< Class11Program />} />
          <Route path = "/neet/online-coaching-class-12" element={ <Class12Program />} />
          <Route path = "/" element={<Landing />} />
          <Route path = "*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </div>
}

function Layout() {
  return <div style={{height:'100vh', backgroundColor:'lightcoral'}}>
      <Header/>
      <div style={{height:'90vh', backgroundColor:'pink'}}>
      <Outlet />
      </div>  
      Footer | Contact us
  </div>
}

function Header() {
  return <div>
     My Header
     <Link to='/'> Allen</Link> 
     |
     <Link to='/neet/online-coaching-class-11' >Class 11</Link>  
     | 
     <Link to='/neet/online-coaching-class-12' >Class 12</Link>
  </div>
}

function ErrorPage() {
  return <div>
    Sorry! Page Not Found.
  </div>
}

function Landing() {
  return <div>
    Welcome To Landing Page of Allen!
  </div>
}

function Class11Program() {
  return <div> 
    Class 11 online Course
  </div>
}

function Class12Program() {
  return <div> 
    Class 12 online Course
  </div>
} 
*/
