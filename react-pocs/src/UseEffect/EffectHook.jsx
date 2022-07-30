import react, { useState, useEffect } from 'react';

export default function EffectHook() {

    const [count, setCount] = useState(0)

    useEffect(
        () => {
            alert("useEffect");
        })

    const TestSetCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <p> count : {count}</p>
            <input type="Submit" onClick={TestSetCount} name="TestCount" ></input>
        </div>
    );


}
