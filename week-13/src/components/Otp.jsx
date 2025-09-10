import { useRef, useState } from "react"
import { Button } from "./buttons"

export function Otp({number}) {

    const ref = useRef(Array(number).fill(0));
    // const ref2 = useRef();
    // const ref3 = useRef();
    // const ref4 = useRef();
    // const ref5 = useRef();
    // const ref6 = useRef();

    const[disabled, setDisabled] = useState(true);

    return <div className="flex justify-center">
        {Array(number).fill(1).map((x, index) =>  <Subotp reference={e => ref.current[index] = e} key={index} onDone={() =>{
            if(index == number - 1) {
                setDisabled(false);
            }
            if(index >= number - 1) {
                return;
            }
            ref.current[index + 1].focus();
        }}  onBack={() =>{
            if(index == 0) {
                return
            }
            ref.current[index - 1].focus();
        }}
            />)}

        
        {/* <Subotp reference={ref2} onDone={() =>{
            ref3.current.focus();
        }}  onBack={() =>{
            ref1.current.focus();
        }}
            />
        <Subotp reference={ref3} onDone={() =>{
            ref4.current.focus()
        }}  onBack={() =>{
            ref2.current.focus();
        }}
            />
        <Subotp reference={ref4} onDone={() =>{
            ref5.current.focus()
        }}  onBack={() =>{
            ref3.current.focus();
        }}
            />
        <Subotp reference={ref5} onDone={() =>{
            ref6.current.focus()
        }}  onBack={() =>{
            ref4.current.focus();
        }}
            />
        <Subotp reference={ref6} onDone={() =>{
            //ref6.current.blur();
            setDisabled(false);
        }}  onBack={() =>{
            ref5.current.focus();
        }}
            />

        <br />
        <br /> */}
        <br />
        <Button disabled={disabled}>Sign in</Button>
    </div>
}

function Subotp({
    reference, onDone, onBack,
}) {
    const [boxValue, setboxValue] = useState("");
    return <input 
    ref={reference}
    maxLength={1}  // ensures only 1 digit
    value = {boxValue}
    onChange={(e) =>{
        const val = e.target.value;
        if(/^[0-9]$/.test(val)) {
            setboxValue(val);
            onDone();
        }
    }}
    onKeyDown={(e) =>{
        if(e.key == "Backspace") {
            if(boxValue != ""){
                setboxValue("");
                onBack();
            }
            else if(onBack) {
                onBack();
            }
        }
    }}
        type="text" 
        className="w-[40px] h-[50px] rounded-xl m-1 outline:none bg-blue-300 px-2 text-white"></input>
}