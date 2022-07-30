import react, { useState, useEffect } from 'react';

export default function UseEffectTestCount() {

    const [count, setCount] = useState(0)

    const TestSetCount =
        (() => {
            setCount(count + 1);
        });

    useEffect(() => { alert("useState"); }
    )

    return (
        <div>
            <p> count : {count}</p>
            <input type="Submit" onClick={TestSetCount} name="TestCount" ></input>

        </div>
    );
}