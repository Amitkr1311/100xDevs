import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button } from "./components/buttons";
import { Input } from "./components/input";
import { Otp } from "./components/Otp";

function App() {
  return (
    <>
        <div className='justify-center h-screen bg-[#0b2242] text-white'>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <Otp number={10}/>
        </div>

    </>
  );
}

export default App;

// {/* <div style={{display:"flex", justifyContent:'center'}}> */}
//       <div className="flex justify-between">
//         <div className="bg-blue-400">Child1</div>
//         <div className="bg-red-400">Child1</div>
//         <div className="bg-green-400">Child1</div>
//       </div>

//       <br />

//       <div className="grid grid-cols-12">
//         <div className="bg-blue-400 col-span-5">Child1</div>
//         <div className="bg-red-400 col-span-2">Child1</div>
//         <div className="bg-green-400 col-span-5">Child1</div>
//       </div>

//       <div className="xl:bg-yellow-400 md:bg-green-400 sm:bg-blue-400 bg-red-400">Hi</div>


{/* <div className="flex flex-col items-center justify-center min-h-screen bg-[#0b2242] text-white">
        <h1 className="mb-12 text-3xl">
          <span className="text-green-200">Webinar</span>.gg
        </h1>
        <h4 className="font-semibold text-xl mb-10">Verify Your Age</h4>
        <p className="text-xs mb-2">
          Please confirm Your birth year. This data will not be stored
        </p>
        <Input className='text-xs' type="text" placeholder="Your Birth Year"></Input>
        <Button className="w-80">Continue</Button>
      </div> */}