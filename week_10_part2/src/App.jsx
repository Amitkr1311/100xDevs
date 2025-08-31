import { createContext, useContext, useState, } from "react"

const BulbContext = createContext();

// to avoid props drillig we uses context api. 
// it is a way to pass the states, function, etc between components without
// having to pass props down manually at each level

export function BulbProvider({children}) {
  const [bulbOn, setbulb] = useState(true);
  return <BulbContext.Provider value={{
      bulbOn: bulbOn,
      setbulb: setbulb
    }}>
      {children}
    </BulbContext.Provider>
}

function App() {

  return <div>
    <BulbProvider>
      <LightBulb />
    </BulbProvider>
  </div>
}

function LightBulb() {
  
  return <div>
    <Light />
    <Tooglebulb />
  </div>
}

function Light() {

  const {bulbOn} = useContext(BulbContext);
  return (
    <div style={{ fontSize: "2rem" }}>
      {bulbOn ? "💡" : "💤"} {/* glowing vs off */}
      <span style={{ marginLeft: "10px" }}>
        {bulbOn ? "Bulb On" : "Bulb Off"}
      </span>
    </div>
  );
}

function Tooglebulb() {

  const {bulbOn,setbulb} = useContext(BulbContext);
  function toggle() {
    setbulb(current => !current)
    //setbulb(!bulbOn)
  }

  return <div style={{marginTop:"10px"}}>
    <button onClick={toggle}>Toggle</button>
  </div>
}

export default App
