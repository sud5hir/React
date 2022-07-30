import react, { useState } from 'react';

export default function UseStateTestCount() {

    const [count, setCount] = useState(0)

    const TestSetCount =
        (() => {
            setCount(count + 1);
        },
            () => { alert("useState"); });


    return (
        <div>
            <p> count : {count}</p>
            <input type="Submit" onClick={TestSetCount} name="TestCount" ></input>
        </div>
    );
}