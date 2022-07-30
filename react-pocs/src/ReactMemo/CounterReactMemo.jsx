import React from "react"
import Counter from "./Counter"
import ChildCounterMemoIssue from './ChildCounterMemoIssue'

const CounterReactMemo = () => {
    const [count1, setCount1] = React.useState(0)
    const [count2, setCount2] = React.useState(0)
    const [count3, setCount3] = React.useState(0)

    const increaseCounter1 = () => {
        setCount1(count1 => count1 + 1)
    }
    const increaseCounter2 = () => {
        setCount2(count2 => count2 + 1)
    }
    const increaseCounter3 = () => {
        setCount3(count3 => count3 + 1)
    }


    return (
        <>
            <button onClick={increaseCounter1}>Increase counter 1</button>
            <Counter value={count1}>Counter 1</Counter>
            <Counter value={count2}>Coutner 2</Counter>
            <button onClick={increaseCounter2}>Increase counter 2</button>
            <span>count 3 :{count3}</span>
            <ChildCounterMemoIssue increaseCounter3={increaseCounter3} value={count3} >Increase counter 3</ChildCounterMemoIssue>
            <button onClick={increaseCounter3}>Increase counter 3</button>
        </>)
}
export default CounterReactMemo;
