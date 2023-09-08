
import { ChangeEvent, InputHTMLAttributes, useRef, useState, useEffect } from "react";
type FnCounterProps = {

    initValue?: number
}

function FnCounter(props: FnCounterProps) {

    const [counter, setCounter] = useState(props.initValue ? props.initValue : 0);

    const inputRef = useRef<HTMLInputElement>(null);

    // useeffect (callback,[dependecnied])
    // use effect with no dependencies is eqivalent to didmount
    useEffect(() => {
        console.log("[fnCount]- DID mouint")
    }, [])

    // if you retunr a call back wth no dependecies its eqivalent to did unmount
    useEffect(() => {

        return () => {
            console.log("[fnCount]- DID Un-mouint")
        }
    }, [])

    // with dependecnies it will be update
    useEffect(() => {
        console.log("[fnCount]- DID Update",counter)
       
    }, [counter])

    function incFunc() {
        setCounter(counter + 1);// this is still async in behaviour but we dont have call backs like we have n cass setstate evenen handler so we use effects hooks to achieve this
    }
    const decFun = () => {
        setCounter(counter - 1);
    }
    function handleChange(evt: ChangeEvent<HTMLInputElement>) {
        if (evt.target.value)
            setCounter(Number(evt.target.value));
        else
            setCounter(0);
    }
    function handleUpdate() {
        // use ref hooks to get value from text box
        setCounter(Number(inputRef.current?.value));
        
    }

    return (
        <div>
            <h6>Fn Counter : {counter}</h6>

            <div>
                <button  type="button" className="btn btn-success" onClick={incFunc}>INC</button>
                <button  type="button" className="btn btn-danger" onClick={decFun}>DEC</button>

            </div>


            <div>
                {/* Controlled input  */}
                Counter : <input type='number' placeholder="Counter" value={counter} onChange={handleChange} />
            </div>

            <div>
                {/* Uncotrolled init */}
                Update Counter : <input type='number'  ref={inputRef} placeholder="Enter a value" />
                <button onClick={handleUpdate}>Update</button>
            </div>
        </div>
    )
}


export default FnCounter;