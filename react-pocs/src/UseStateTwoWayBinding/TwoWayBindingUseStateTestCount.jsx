import react, { useState, useEffect } from 'react';
import "./counter.css"
export default function TwoWayBindingUseStateTestCount() {

    const [count, setCount] = useState(5);
    const Max_Limit = 20;
    const Min_Limit = 0;

    const IncrementOrDecrementCounter = (indicator) => {
        console.log("IncrementOrDecrementCounter");
        switch (indicator) {
            case 1:
                if (count <= Max_Limit - 1) {
                    setCount(count + 1);
                }
                break;
            case 0:
                if (count != Min_Limit) {
                    setCount(count - 1);
                }
                break;
        }
    }

    useEffect(
        () => {
            console.log(count);
        }
    );

    const changeCounter = (e) => {
        setCount(parseInt(e.target.value));
    }

    const onKeyDown = (e) => {
        setCount('');
    }

    return (

        < div className="twoway" >

            <input className="plusinput" type="Submit" onClick={() => IncrementOrDecrementCounter(1)} Value="+" ></input>
            <input className="input" type="text" onKeyDown={onKeyDown} value={count} onChange={changeCounter} name="Location"></input>
            <input className="minusinput" type="Submit" onClick={() => IncrementOrDecrementCounter(0)} Value="-" ></input>

            {/* <input type="text" name="Location" value={count}
                    onChange={changeCounter}></input> */}
            {/* <input type="text" id="id2" value={count}></input>
            <input type="Submit" onClick={TestSetCount} Value="TestCount" ></input> */}
        </div >
    );
}