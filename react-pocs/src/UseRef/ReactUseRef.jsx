import react, { useRef, useEffect, useState } from 'react';

export default function ReactUseRef() {
    //const elementRef = useRef();
    // const inputRef = useRef();
    const [count, setCount] = useState(0)
    const inputRef1 = useRef();
    const inputRef2 = useRef();
    // const counterEl = useRef(null)

    useEffect(() => {
        // const divElement = elementRef.current;
        // console.log(divElement); // logs <div>I'm an element</div>
        inputRef1.current.focus();
    }, []);

    const increment = () => {
        console.log(inputRef1.current)
    }

    const SetString = () => {
        console.log(inputRef2.current)
        inputRef2.current.style.width = "300px";
    }
    
    return (
        <div>
            {/* Count: <span ref={counterEl}>{count}</span> */}
            {/* <button onClick={increment}>+</button> */}
            {/* <div ref={elementRef}>
                I'm an element
            </div> */}
            {/* <input
                ref={inputRef}
                type="text"
            /> */}

            <input ref={inputRef1}
                value={count}
                type="number" onChange={e => setCount(e.target.value + 1)} />

            <input ref={inputRef2} style={{ width: 100 }}
                value={count} onChange={e => setCount(e.target.value + 1)}
                type="text" />
            <h3>value is {count}</h3>

            <button onClick={increment}>Dollar</button>
            <button onClick={SetString}>Rupess</button>
        </div>
    );
}