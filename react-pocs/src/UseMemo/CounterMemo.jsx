import React, { useState, useMemo, useCallback } from 'react';

function CounterMemo() {
    const [number, setNumber] = useState(0)
    const [counter, setCounter] = useState(0);

    const squaredNum = useMemo(() => {
        console.log("useMemo Called ")
        return squareNum(number);
    }, [number])

    // doing some expensive task , for other state changes iseven value will get 
    //returned from
    const isEven = useMemo(() => {
        let i = 0;
        while (i < 200000000    ) i++;
        return counter % 2 == 0;
    }, [counter])

    // Change the state to the input
    const onChangeHandler = (e) => {
        setNumber(e.target.value);
    }


    // Increases the counter by 1
    const counterHander = () => {
        setCounter(counter + 1);
    }
    return (
        <div className="App">
            <h1>Welcome to Geeksforgeeks</h1>
            <div>OUTPUT UseMemo: {squaredNum}</div>
            <input type="number" placeholder="Enter a number"
                value={number} onChange={onChangeHandler}>
            </input>

            <button onClick={counterHander}>Counter ++</button>
            <div>Counter : {counter}</div>
            <span>{isEven ? 'Even' : 'Odd'}</span>
        </div>
    );
}

// function to square the value
function squareNum(number) {
    console.log("Squaring will be done!", number);
    return Math.pow(number, 2);
}

export default CounterMemo;